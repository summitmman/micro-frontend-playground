import { useEffect, useRef } from 'react';

interface AngularContainerProps {
  component: {
    bootstrap: (container: HTMLElement) => Promise<{ destroy: () => void }>;
    // or
    // default: (container: HTMLElement) => Promise<{ destroy: () => void }>;
  } | ((container: HTMLElement) => Promise<{ destroy: () => void }>);
}

export default function AngularContainer({ component }: AngularContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ngInstanceRef = useRef<{ destroy: () => void } | null>(null);
  const isUnmountedRef = useRef(false);
  const cleanupTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any pending cleanup
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current);
      cleanupTimeoutRef.current = null;
    }

    isUnmountedRef.current = false;

    // Normalize the bootstrap function
    const bootstrapFn =
      typeof component === 'function'
        ? component
        : 'bootstrap' in component
        ? component.bootstrap
        : (component as any).default;

    if (bootstrapFn) {
      bootstrapFn(containerRef.current)
        .then((instance: { destroy: () => void }) => {
          if (!isUnmountedRef.current && containerRef.current) {
            ngInstanceRef.current = instance;
          } else {
            instance.destroy();
          }
        })
        .catch((err: any) => {
          console.error('SUMIT LOG - React: Error bootstrapping Angular remote:', err);
        });
    } else {
      console.warn('Angular component does not export bootstrap function');
    }

    return () => {
      isUnmountedRef.current = true;
      
      // Cancel any existing cleanup timeout
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
      
      // Delay cleanup to allow for React StrictMode double-mounting
      cleanupTimeoutRef.current = setTimeout(() => {
        if (ngInstanceRef.current && isUnmountedRef.current) {
          ngInstanceRef.current.destroy();
          ngInstanceRef.current = null;
        }
        cleanupTimeoutRef.current = null;
      }, 50); // Increased delay for StrictMode
    };
  }, [component]);

  return (<div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>);
}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

let appRef: any = null;

export function bootstrap(container: HTMLElement) {
  if (!container) {
    throw new Error('Container element is required to bootstrap Angular app');
  }

  // Create <app-root> inside the container if not exists
  const rootSelector = 'app-root';
  let root = container.querySelector(rootSelector);
  if (!root) {
    root = document.createElement(rootSelector);
    container.appendChild(root);
  }

  // Override appConfig to mount the app to the root element we created
  const config = {
    ...appConfig,
    // Bootstrap inside the created root element
    host: root,
  };

  // Bootstrap the Angular standalone app
  return bootstrapApplication(App, config)
    .then((ref) => {
      appRef = ref;
      return {
        destroy() {
          if (appRef) {
            appRef.destroy();
            if (root && root.parentNode) {
              root.parentNode.removeChild(root);
            }
          }
        }
      };
    });
}

// bootstrap(document.querySelector('app-root')!);
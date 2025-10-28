// Type declarations for Module Federation remotes

declare module 'remoteapp1/App' {
  import { ComponentType } from 'react';
  const AppNew: ComponentType;
  export default AppNew;
}

declare module 'remoteapp2/Component' {
  export interface BootstrapFunction {
    (container: HTMLElement): Promise<{ destroy: () => void }>;
  }
  export const bootstrap: BootstrapFunction;
}
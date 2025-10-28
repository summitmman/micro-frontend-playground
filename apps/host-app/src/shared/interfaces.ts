import type { LazyExoticComponent, JSX } from 'react';

export interface IAppRoute {
  name: string;
  path: string;
  navPath?: string; // Optional navigation path, defaults to path if not provided
  displayName: string;
  component: LazyExoticComponent<() => JSX.Element>
}
import type { LazyExoticComponent, JSX } from 'react';

export interface IAppRoute {
  name: string;
  path: string;
  navPath?: string;
  displayName: string;
  component: LazyExoticComponent<() => JSX.Element>
}
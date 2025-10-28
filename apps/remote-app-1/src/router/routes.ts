import { lazy } from 'react';
import type { IAppRoute } from '../shared/interfaces';

export const basePath = '/remote1';
export const routes: Array<IAppRoute> = [
  {
    name: 'home',
    path: '/',
    displayName: 'Remote 1 Home',
    component: lazy(() => import('../views/Home'))
  },
  {
    name: 'profile',
    path: '/profile',
    displayName: 'Remote 1 Profile',
    component: lazy(() => import('../views/Profile'))
  }
];
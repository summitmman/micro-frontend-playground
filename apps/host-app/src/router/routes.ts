import { lazy } from 'react';
import type { IAppRoute } from '../shared/interfaces';

export const remote1BasePath = '/remote1';
export const remote2BasePath = '/remote-2';
export const routes: Array<IAppRoute> = [
  {
    name: 'home',
    path: '/',
    displayName: 'Home',
    component: lazy(() => import('../views/Home'))
  },
  {
    name: 'profile',
    path: '/profile',
    displayName: 'Profile',
    component: lazy(() => import('../views/Profile'))
  },
  // {
  //   name: 'remote1-App-Profile',
  //   path: `${remote1BasePath}/profile`,
  //   navPath: `${remote1BasePath}/profile`,
  //   displayName: 'Remote 1 App Profile',
  //   component: lazy(() => import('../views/Remote1App'))
  // },
  {
    name: 'remote1-App',
    path: `${remote1BasePath}/*`,
    navPath: remote1BasePath,
    displayName: 'Remote 1 App',
    component: lazy(() => import('../views/Remote1App'))
  },
  {
    name: 'remote2-App-Profile',
    path: `${remote2BasePath}/profile`,
    navPath: `${remote2BasePath}/profile`,
    displayName: 'Remote 2 App Profile',
    component: lazy(() => import('../views/Remote2App'))
  },
  {
    name: 'remote2-App',
    path: `${remote2BasePath}/*`,
    navPath: remote2BasePath,
    displayName: 'Remote 2 App',
    component: lazy(() => import('../views/Remote2App'))
  }
];
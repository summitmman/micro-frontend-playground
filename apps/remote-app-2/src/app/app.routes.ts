import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote-2',
    children: [
      {
        path: '',
        loadComponent: () => import('./views/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/profile.component').then(m => m.ProfileComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/remote-2',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/remote-2'
  }
];

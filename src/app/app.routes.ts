import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LibrariesPageComponent } from './pages/libraries-page/libraries-page.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'libraries',
        component: LibrariesPageComponent
      },
      {
        path: '**',
        redirectTo: 'libraries'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LibrariesPageComponent } from './pages/libraries-page/libraries-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';

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
        path: 'explore',
        component: ExplorePageComponent
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

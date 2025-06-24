import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LibrariesPageComponent } from './pages/libraries-page/libraries-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: '',
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
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'books/:id',
        component: BookDetailsPageComponent
      },
      {
        path: '**',
        redirectTo: 'libraries'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

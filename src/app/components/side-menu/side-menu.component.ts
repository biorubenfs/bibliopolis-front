import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  apiService = inject(ApiService)
  router = inject(Router)

  logout() {
    this.apiService.logout()
      .subscribe({
        next: () => {
          this.router.navigate(['login'])
        }
      })
  }
}

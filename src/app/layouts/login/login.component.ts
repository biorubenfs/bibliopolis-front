import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private apiService = inject(ApiService);
  private router = inject(Router)

  email = signal<string>('')
  password = signal<string>('')

  login() {
    this.apiService.login(this.email(), this.password())
      .subscribe({
        next: (res) => {
          this.router.navigate(['libraries'])
        }
    });
  }
}

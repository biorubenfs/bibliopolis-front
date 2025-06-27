import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private apiService = inject(ApiService);

  email = signal<string>('')
  password = signal<string>('')

  login() {
    this.apiService.login(this.email(), this.password()).subscribe(res => console.log({res}))


  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {
  changePasswordForm: FormGroup
  apiService = inject(ApiService)

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    })
  }

  submit() {
    if (this.changePasswordForm.valid) {
      const { currentPassword, newPassword } = this.changePasswordForm.value
      this.apiService.changePassword(currentPassword, newPassword).subscribe({
        next: () => {
          console.log('Contraseña cambiada');
        },
        error: (err) => {
          console.error('Error al cambiar la contraseña', err);
        },
        complete: () => {
          console.log('Operación completada');
        }
      });
    }
  }
}

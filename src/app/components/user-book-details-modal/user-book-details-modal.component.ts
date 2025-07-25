import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserBook } from '../../interfaces/api.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-book-details-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-book-details-modal.component.html',
})
export class UserBookDetailsModalComponent {
  @Input() userBook!: UserBook // Angular no admite Signals en los componentInstance de NgbModal aún
  userBookForm: FormGroup
  apiService = inject(ApiService)
  rating = signal<number>(0)

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.userBookForm = this.fb.group({
      rating: [''],
      notes: ['']
    });
    // this.rating.set(this.userBook.rating ?? 0)
  }

  update() {
    this.activeModal.close('valor enviado por la modal');
  }

  cancel() {
    this.activeModal.dismiss();
  }
}

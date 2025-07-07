import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-library-modal.component.html'
})
export class LibraryModalComponent {
  libraryForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.libraryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  submit() {
    if (this.libraryForm.valid) {
      this.activeModal.close(this.libraryForm.value);
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }
}

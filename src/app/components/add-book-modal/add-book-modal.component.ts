import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenLibraryService } from '../../services/openlibrary.service';

@Component({
  selector: 'app-add-book-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book-modal.component.html',
})
export class AddBookModalComponent {
  searchForm: FormGroup
  openLibraryService = inject(OpenLibraryService)
  title = signal<string>('')
  isbn = signal<string>('')

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  submit() {
    const isbn = this.searchForm.value.search
    if (this.searchForm.valid) {
      this.openLibraryService.getBookByIsbn(isbn).subscribe({
        next: (book) => {
          this.title.set(book.title)
          this.isbn.set(book.isbn_13[0])
        }
      }
      )
    }
  }

  confirm() {
    this.activeModal.close(this.isbn())
  }

  cancel() {
    this.activeModal.dismiss();
  }
}

import { Component, computed, inject, input, output } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteLibraryModalComponent } from '../delete-library-modal/delete-library-modal.component';

@Component({
  selector: 'library-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './library-card.component.html',
})
export class LibraryCardComponent {
  modalService = inject(NgbModal)
  library = input.required<Library>()
  totalBooks = computed<number>(() => this.library.length)

  apiService = inject(ApiService)

  _deleteLibrary = output<string>()

  deleteLibraryById() {
    const modalRef = this.modalService.open(DeleteLibraryModalComponent);
    // modalRef.componentInstance.libraryName = this.library().name

    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          this._deleteLibrary.emit(this.library().id)
        }
      })
      .catch(() => {
        // Cancelado
      });
  }

}

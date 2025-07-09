import { Component, inject, input, output } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'library-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './library-card.component.html',
})
export class LibraryCardComponent {
  modalService = inject(NgbModal)
  library = input.required<Library>()

  _deleteLibrary = output<string>()

  deleteLibraryById() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = 'Esta acción eliminará la biblioteca'
    modalRef.componentInstance.item = this.library().name

    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          this._deleteLibrary.emit(this.library().id)
        }
      })
      .catch(() => {});
  }
}

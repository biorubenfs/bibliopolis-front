import { Component, inject, input, output } from '@angular/core';
import { UserBook } from '../../interfaces/api.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-user-book-card',
  imports: [],
  templateUrl: './user-book-card.component.html',
})
export class UserBookCardComponent {
  modalService = inject(NgbModal)
  userBook = input.required<UserBook>()

  _deleteUserBook = output<string>()

  deleteUserBookById() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
        modalRef.componentInstance.message = 'Esta acción eliminará el libro de la biblioteca'
        modalRef.componentInstance.item = this.userBook().bookTitle
    
        modalRef.result
          .then((confirmed) => {
            if (confirmed) {
              this._deleteUserBook.emit(this.userBook().id)
            }
          })
          .catch(() => {});
      }
  }

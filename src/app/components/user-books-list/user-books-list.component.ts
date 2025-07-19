import { Component, inject, input, output } from '@angular/core';
import { UserBook } from '../../interfaces/api.interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserBookDetailsModalComponent } from '../user-book-details-modal/user-book-details-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-user-books-list',
  imports: [],
  templateUrl: './user-books-list.component.html',
})
export class UserBooksListComponent {
  libraryId = input.required<string>()
  userBooks = input.required<Array<UserBook>>()

  modalService = inject(NgbModal)

  deleteUserBook = output<UserBook>()

  openUserBookDetails(userBook: UserBook) {
    const modalRef = this.modalService.open(UserBookDetailsModalComponent)
    modalRef.componentInstance.userBook = userBook

    modalRef.result
      .then((value) => {
        console.log(value)
      })
      .catch(() => { });
  }

  deleteUserBookById(userBook: UserBook) {
    const modalRef = this.modalService.open(ConfirmModalComponent)
    modalRef.componentInstance.message = `¿Eliminar ${userBook.bookTitle} de la biblioteca?`

    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          this.deleteUserBook.emit(userBook)
        }
      })
      .catch(() => { });
  }
}

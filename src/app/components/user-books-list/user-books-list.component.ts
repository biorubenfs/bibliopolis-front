import { Component, input, output } from '@angular/core';
import { UserBookCardComponent } from "../user-book-card/user-book-card.component";
import { UserBook } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-user-books-list',
  imports: [UserBookCardComponent],
  templateUrl: './user-books-list.component.html',
})
export class UserBooksListComponent {
  libraryId = input.required<string>()
  userBooks = input.required<Array<UserBook>>()

  _deleteUserBook = output<string>() // propaga el evento del hijo hacia arriba (para que el abuelo pueda escuchar)
}

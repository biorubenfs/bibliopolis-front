import { Component, input } from '@angular/core';
import { UserBook } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-user-book-card',
  imports: [],
  templateUrl: './user-book-card.component.html',
})
export class UserBookCardComponent {
  userBook = input.required<UserBook>()
}

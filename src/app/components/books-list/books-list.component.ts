import { Component, input } from '@angular/core';
import { Book } from '../../interfaces/api.interfaces';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'books-list',
  imports: [BookCardComponent],
  templateUrl: './books-list.component.html',
})
export class BooksListComponent {
  books = input.required<Array<Book>>()
}

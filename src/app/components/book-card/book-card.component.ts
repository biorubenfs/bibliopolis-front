import { Component, input } from '@angular/core';
import { Book } from '../../interfaces/api.interfaces';

@Component({
  selector: 'book-card',
  imports: [],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  book = input.required<Book>()
}

import { Component, input, output } from '@angular/core';
import { Book } from '../../interfaces/api.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-card',
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  book = input.required<Book>()
}

import { Component, inject, signal } from '@angular/core';
import { BooksListComponent } from "../../components/books-list/books-list.component";
import { ApiService } from '../../services/api.service';
import { Book } from '../../interfaces/api.interfaces';

@Component({
  selector: 'app-explore-page',
  imports: [BooksListComponent],
  templateUrl: './explore-page.component.html',
})
export class ExplorePageComponent {

  apiService = inject(ApiService)

  books = signal<Array<Book>>([])

  constructor() {
    this.apiService.getLastAddedBooks()
      .subscribe({
        next: (books) => {
          this.books.set(books)
        }
      })
  }

}

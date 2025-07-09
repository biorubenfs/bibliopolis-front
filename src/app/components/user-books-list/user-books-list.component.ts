import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { UserBookCardComponent } from "../user-book-card/user-book-card.component";

@Component({
  selector: 'app-user-books-list',
  imports: [UserBookCardComponent],
  templateUrl: './user-books-list.component.html',
})
export class UserBooksListComponent {
  apiService = inject(ApiService)
  libraryId = input.required<string>()

  userBooksResource = rxResource({
    request: () => ({ libraryId: this.libraryId }),
    loader: ({ request }) => {
      if (!request) return of();
      return this.apiService.getLibraryBooks(request.libraryId());
    }
  });
}

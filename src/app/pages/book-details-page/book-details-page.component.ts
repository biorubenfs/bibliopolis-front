import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {rxResource} from '@angular/core/rxjs-interop'
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-details-page',
  imports: [],
  templateUrl: './book-details-page.component.html'
})
export class BookDetailsPageComponent {

  private apiService = inject(ApiService);

  bookId = inject(ActivatedRoute).snapshot.params['id']

  bookResource = rxResource({
    request: () => ({ bookId: this.bookId }),
    loader: ({ request }) => {
      if (!request) return of();
      return this.apiService.getBookById(request.bookId);
    }
  });
}


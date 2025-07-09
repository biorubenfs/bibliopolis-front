import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { UserBooksListComponent } from "../../components/user-books-list/user-books-list.component";

@Component({
  selector: 'app-library-details-page',
  imports: [UserBooksListComponent],
  templateUrl: './library-details-page.component.html',
})
export class LibraryDetailsPageComponent {
  private apiService = inject(ApiService);

  libraryId = inject(ActivatedRoute).snapshot.params['id']

  libraryResource = rxResource({
    request: () => ({ libraryId: this.libraryId }),
    loader: ({ request }) => {
      if (!request) return of();
      return this.apiService.getLibraryById(request.libraryId);
    }
  });
}

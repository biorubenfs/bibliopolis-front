import { Component, computed, inject, input, output } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'library-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './library-card.component.html',
})
export class LibraryCardComponent {
  library = input.required<Library>()
  totalBooks = computed<number>(() => this.library.length)

  apiService = inject(ApiService)

  _deleteLibrary = output<string>()

  deleteLibraryById(): void {
    this._deleteLibrary.emit(this.library().id)
  }
}

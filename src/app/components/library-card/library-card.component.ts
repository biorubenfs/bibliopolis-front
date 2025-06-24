import { Component, input, signal } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';

@Component({
  selector: 'library-card',
  imports: [],
  templateUrl: './library-card.component.html',
})
export class LibraryCardComponent {
  library = input.required<Library>()
}

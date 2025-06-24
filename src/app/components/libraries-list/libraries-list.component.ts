import { Component, input, signal } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { LibraryCardComponent } from '../library-card/library-card.component';

@Component({
  selector: 'libraries-list',
  imports: [LibraryCardComponent],
  templateUrl: './libraries-list.component.html',
})
export class LibrariesListComponent {
  libraries = input.required<Array<Library>>()
}

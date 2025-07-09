import { Component, input, output } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { LibraryCardComponent } from '../library-card/library-card.component';

@Component({
  selector: 'libraries-list',
  imports: [LibraryCardComponent],
  templateUrl: './libraries-list.component.html',
})
export class LibrariesListComponent {
  libraries = input.required<Array<Library>>()

  _deleteLibrary = output<string>() // propaga el evento del hijo hacia arriba (para que el abuelo pueda escuchar)
}

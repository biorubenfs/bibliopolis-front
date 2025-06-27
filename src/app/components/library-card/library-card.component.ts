import { Component, input, signal } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'library-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './library-card.component.html',
})
export class LibraryCardComponent {
  library = input.required<Library>()
}

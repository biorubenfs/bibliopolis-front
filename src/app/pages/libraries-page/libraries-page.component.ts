import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Library } from '../../interfaces/api.interfaces';
import { LibrariesListComponent } from "../../components/libraries-list/libraries-list.component";

@Component({
  selector: 'app-libraries-page',
  imports: [LibrariesListComponent],
  templateUrl: './libraries-page.component.html',
})
export class LibrariesPageComponent {

  apiService = inject(ApiService)

  libraries = signal<Array<Library>>([])

  constructor() {
    this.apiService.getUserLibraries()
      .subscribe({
        next: (libraries) => {
          this.libraries.set(libraries)
        }
      })
  }

}

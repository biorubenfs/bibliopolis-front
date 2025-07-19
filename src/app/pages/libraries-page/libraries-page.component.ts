import { Component, inject, signal, computed } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Library } from '../../interfaces/api.interfaces';
import { LibrariesListComponent } from "../../components/libraries-list/libraries-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LibraryModalComponent } from '../../components/create-library-modal/create-library-modal.component';

@Component({
  selector: 'app-libraries-page',
  imports: [LibrariesListComponent],
  templateUrl: './libraries-page.component.html',
})
export class LibrariesPageComponent {

  apiService = inject(ApiService)
  modalService = inject(NgbModal)
  libraries = signal<Array<Library>>([])

  constructor() {
    this.apiService.getUserLibraries()
      .subscribe({
        next: (libraries) => {
          this.libraries.set(libraries)
        }
      })
  }

  createLibrary() {
    const modalRef = this.modalService.open(LibraryModalComponent);

    modalRef.result
      .then((data) => {
        const name = data.name
        const description = data.description
        this.apiService.createLibrary(name, description).subscribe(() => {
          this.apiService.getUserLibraries()
            .subscribe({
              next: (libraries) => {
                this.libraries.set(libraries)
              }
            })
        });
      })
      .catch(() => {})
  }

  deleteLibrary(id: string) {
    this.apiService.deleteLibraryById(id)
      .subscribe(() => {
        this.apiService.getUserLibraries()
          .subscribe({
            next: (libraries) => {
              this.libraries.set(libraries)
            }
          })
      })
  }
}

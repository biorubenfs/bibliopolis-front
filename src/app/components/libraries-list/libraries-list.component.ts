import { Component, inject, input, output } from '@angular/core';
import { Library } from '../../interfaces/api.interfaces';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'libraries-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './libraries-list.component.html',
})
export class LibrariesListComponent {
  libraries = input.required<Array<Library>>()
  modalService = inject(NgbModal)

  deleteLibrary = output<string>()

  deleteLibraryById(library: Library) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = `Eliminar la biblioteca ${library.name}`

    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          this.deleteLibrary.emit(library.id)
        }
      })
      .catch(() => {});
  }
}

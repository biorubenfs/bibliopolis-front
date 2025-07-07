import { Component, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-library-modal',
  imports: [],
  templateUrl: './delete-library-modal.component.html',
})
export class DeleteLibraryModalComponent {
  constructor(public activeModal: NgbActiveModal) { }

  confirm() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.dismiss(false);
  }
}

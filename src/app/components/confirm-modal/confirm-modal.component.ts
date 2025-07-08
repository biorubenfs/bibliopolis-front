import { Component, Input, input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-library-modal',
  imports: [],
  templateUrl: './confirm-modal.component.html',
  standalone: true
})
export class ConfirmModalComponent {
  @Input() message!: string; // Angular no admite Signals en los componentInstance de NgbModal aún
  @Input() item!: string

  constructor(public activeModal: NgbActiveModal) { }

  confirm() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.dismiss(false);
  }
}

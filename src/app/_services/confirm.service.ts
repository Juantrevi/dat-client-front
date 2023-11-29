import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private modalService: BsModalService) {
   }

   bsModalRef?: BsModalRef<ConfirmDialogComponent>;

  confirm(title = 'Confirmation'
  , message = 'Are you sure?'
  , btnOkText: string = 'OK'
  , btnCancelText: string = 'Cancel') {
  
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    };
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent, config);
  }
}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Modal
  modalTransactionDetail: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered modal-xl"
  };

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openTransactionDetail(modalRef: TemplateRef<any>) {
    this.modalTransactionDetail = this.modalService.show(modalRef, this.modalConfig);
  }

  closeTransactionDetail() {
    this.modalTransactionDetail.hide()
  }

  downloadReceipt() {

  }

  successDownload() {
    swal.fire({
      title: 'Success',
      text: 'Successfully downloaded',
      icon: 'success',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-outline-success '
      }
    })
    console.log('confirm')
  }

  failedDownload() {
    swal.fire({
      title: 'Receipt failed to generate',
      text: 'Please contact SSM Enquiry',
      icon: 'warning',
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: 'Confirm',
      customClass: {
        cancelButton: 'btn btn-outline-primary ',
        confirmButton: 'btn btn-primary '
      }
    })
    console.log('confirm')
  }

}

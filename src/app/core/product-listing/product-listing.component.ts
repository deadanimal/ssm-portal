import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

class Entity {
  name: string
  registration_no: string
}

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  // Data
  entity: Entity
  products: any[] = []

  // Checker
  isProceed: boolean = false

  // Options
  ctcOpts = [
    { name: 'non-CTC', value: 'non-ctc' },
    { name: 'CTC', value: 'ctc' },
    { name: 'Both', value: 'both' }
  ]

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.entity = { 
      name: 'Pipeline Engineering Sdn. Bhd.', 
      registration_no: '197801002771 (39761-K)'
    }
  }

  proceed() {
    this.isProceed = true
  }

  addCart() {
    let title = 'Success'
    let message = 'Item is added to the cart'
    this.toastr.success(message, title)
  }

}

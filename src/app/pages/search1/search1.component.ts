import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.scss']
})
export class Search1Component implements OnInit {

  isProceed: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  proceed() {
    this.isProceed = true
  }

}

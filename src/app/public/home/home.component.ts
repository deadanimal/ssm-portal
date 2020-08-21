import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Data
  totalCompanies: number = 1360941
  totalBusinessess: number = 7810212
  totalLocal: number = 1356052
  totalForeign: number = 4889
  totalSoleProprietorship: number = 6446741
  totalPartnership: number = 1363471

  // Image
  slider1 = 'assets/img/carousel/landscape-1.jpg'
  slider2 = 'assets/img/carousel/landscape-2.jpg'

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigatePage(path: string) {
    // console.log('Path: ', path)
    this.router.navigate([path])
  }

}

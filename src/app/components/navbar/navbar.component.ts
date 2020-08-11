import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Checker
  isCollapsed = true;

  constructor(
    private router: Router
  ) {
    router.events.subscribe(val => {
      this.isCollapsed = true;
    });
  }

  ngOnInit() {}

  mobileView(){
    if (window.innerWidth < 992) {
        return true;
    }
    return false;
  }

  navigatePage(path: string) {
    // console.log('Path: ', path)
    this.router.navigate([path])
  }

}

import { Component, OnInit } from "@angular/core";
import Glide from "@glidejs/glide";
import { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

@Component({
  selector: 'app-landing4',
  templateUrl: './landing4.component.html',
  styleUrls: ['./landing4.component.scss']
})
export class Landing4Component implements OnInit {

  focus
  public totalCompanies: number = 1360941;
  public totalBusinessess: number = 7810212;
  
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {

    // Carousel
    new Glide('.glidezz', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
      autoplay: 2500
    }).mount({ Autoplay });

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
  }

}

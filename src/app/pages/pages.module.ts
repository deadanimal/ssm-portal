import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { Landing2Component } from './landing2/landing2.component';
import { Search1Component } from './search1/search1.component';
import { CartComponent } from './cart/cart.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EgovComponent } from './egov/egov.component';
import { CbidComponent } from './cbid/cbid.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LandingComponent,
    Landing2Component,
    Search1Component,
    CartComponent,
    EgovComponent,
    CbidComponent,
    ReceiptComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild(PagesRoutes)
  ]
})
export class PagesModule { }

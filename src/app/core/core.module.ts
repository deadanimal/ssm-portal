import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routing';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    CartComponent
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
    RouterModule.forChild(CoreRoutes)
  ]
})
export class CoreModule { }

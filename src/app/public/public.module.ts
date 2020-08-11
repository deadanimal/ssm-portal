import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { RouterModule } from '@angular/router';
import { PublicRoutes } from './public.routing';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { UserGuideComponent } from './user-guide/user-guide.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent,
    UserGuideComponent
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
    RouterModule.forChild(PublicRoutes)
  ]
})
export class PublicModule { }

import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Landing2Component } from './landing2/landing2.component';
import { Search1Component } from './search1/search1.component';
import { CartComponent } from './cart/cart.component';
import { CbidComponent } from './cbid/cbid.component';
import { EgovComponent } from './egov/egov.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Landing3Component } from './landing3/landing3.component';
import { Landing4Component } from './landing4/landing4.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'landing',
                component: LandingComponent
            },
            {
                path: 'landing2',
                component: Landing2Component
            },
            {
                path: 'search1',
                component: Search1Component
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'cbid',
                component: CbidComponent
            },
            {
                path: 'egov',
                component: EgovComponent
            },
            {
                path: 'receipt',
                component: ReceiptComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'landing3',
                component: Landing3Component
            },
            {
                path: 'landing4',
                component: Landing4Component
            }
        ]
    }
]
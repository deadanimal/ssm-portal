import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonalInvolvementComponent } from './personal-involvement/personal-involvement.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileComponent } from './profile/profile.component';

export const CoreRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'checkout',
                component: CheckoutComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'personal-involvement',
                component: PersonalInvolvementComponent
            },
            {
                path: 'product-listing',
                component: ProductListingComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'transactions',
                component: TransactionsComponent
            },
            {
                path: 'search-engine',
                component: SearchEngineComponent
            }
        ]
    }
]
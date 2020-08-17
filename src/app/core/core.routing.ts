import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';

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
                path: 'transactions',
                component: TransactionsComponent
            },
            {
                path: 'personal-involvement',
                component: SearchEngineComponent
            }
        ]
    }
]
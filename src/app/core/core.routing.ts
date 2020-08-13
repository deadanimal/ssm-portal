import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

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
                path: 'orders',
                component: OrdersComponent
            }
        ]
    }
]
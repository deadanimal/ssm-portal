import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const CoreRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cart',
                component: CartComponent
            }
        ]
    }
]
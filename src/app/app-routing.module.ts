import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';
// import { PagesModule } from './pages/pages.module';
// import { PublicModule } from './public/public.module';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: '',
    component: CoreLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

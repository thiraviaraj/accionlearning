import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FistPageComponent } from './containers/fist-page/fist-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'first-component', component: FistPageComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

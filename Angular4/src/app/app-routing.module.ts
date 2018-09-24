import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';


const routes: Routes = [
  {path:'', redirectTo:'customer', pathMatch:'full'},
  {path:'customer', component:CustomersComponent},
  {path:'add', component:CreateCustomerComponent},
  {path:'findbylastname', component:SearchCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

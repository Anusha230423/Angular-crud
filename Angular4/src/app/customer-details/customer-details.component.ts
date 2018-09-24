import { Component, Input} from '@angular/core';
import { DataService } from '../data.service';
import {Customer} from '../customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})
export class CustomerDetailsComponent {

  @Input()
   customer: Customer;
 
  constructor(private dataService: DataService) {}
 
  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }
 
  goBack(): void {
    window.location.replace('');
  }

}

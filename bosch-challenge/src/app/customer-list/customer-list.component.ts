import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  hideCustomersWithoutContract: boolean = false;
  todayDate: Date = new Date();
  currentMonth: number;

  constructor(private customerService: CustomerService) {
    this.currentMonth = this.todayDate.getMonth() + 1;
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customers = data;
        for (let cust of this.customers) {
          const birthDate = new Date(Date.parse(cust.birthDate));
          const birthDateMonth = birthDate.getMonth() + 1;
          if (birthDateMonth === this.currentMonth)
            cust.sameBirthMonth = true;
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

  deleteCustomer(id: number) {
    const index = this.customers.findIndex(x => x.id === id);
    if (index != -1)
      this.customers.splice(index, 1);
  }

  toggleCustomers() {
    this.hideCustomersWithoutContract = !this.hideCustomersWithoutContract;
    if (!this.hideCustomersWithoutContract)
      this.customers = this.customers.filter(x => x.hasContract);
    else
      this.getCustomers();
  }
}

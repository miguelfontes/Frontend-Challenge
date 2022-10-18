import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: any;
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.customerService.getCustomer(+id).subscribe({
      next: data => {
        this.customer = data;
        console.log(this.customer);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

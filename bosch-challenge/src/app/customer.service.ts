import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private url = "https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users";

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.url)
      .pipe(
        tap(_ => console.log("Fetched customers")),
        catchError(this.handleError<Customer[]>('getCustomers', [])))
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => console.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

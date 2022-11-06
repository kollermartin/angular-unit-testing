import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  isEmptyObject(value: any) {
    return Object.keys(value).length === 0;
  }

  favouriteCustomersOnly(customers: Customer[]) {
    return customers.filter((customer) => customer.favourite);
  }
}

import { TestBed } from '@angular/core/testing';
import { Customer } from '../../customer.model';

import { UtilsService } from '../../utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return true when object empty', () => {
    expect(service.isEmptyObject({})).toBeTruthy();
    expect(service.isEmptyObject({})).toBe(true);
  });

  it('Should return false when object not empty', () => {
    let user = { name: 'Žaneta', clothing: 'Tepláky' };

    expect(service.isEmptyObject(user)).toBeFalsy();
    expect(service.isEmptyObject(user)).toBe(false);
    expect(service.isEmptyObject(user)).not.toBe(true);
  });

  it('Should return favourite customers', () => {
    const customers: Customer[] = [
      {
        name: 'Jožo',
        favourite: false,
      },
      {
        name: 'Ctirad',
        favourite: true,
      },
      {
        name: 'Žaneta',
        favourite: true,
      },
    ];

    const result = service.favouriteCustomersOnly(customers);

    expect(result.length).toBe(2);
  });

  it('Should check that objects are same', () => {
    const customer1: Customer = {
      name: 'Jolanda',
      favourite: false,
    };

    const customer2: Customer = {
      name: 'Jolanda',
      favourite: false,
    };

    expect(customer1).toEqual(customer2);
  });
});

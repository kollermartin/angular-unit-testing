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
});

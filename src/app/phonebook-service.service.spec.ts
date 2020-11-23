import { TestBed } from '@angular/core/testing';

import { PhonebookServiceService } from './phonebook-service.service';

describe('PhonebookServiceService', () => {
  let service: PhonebookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonebookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

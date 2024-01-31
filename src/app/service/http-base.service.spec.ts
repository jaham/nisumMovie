/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpBaseService } from './http-base.service';

describe('Service: Base', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBaseService]
    });
  });

  it('should ...', inject([HttpBaseService], (service: HttpBaseService) => {
    expect(service).toBeTruthy();
  }));
});

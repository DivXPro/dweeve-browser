/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExamplesService } from './examples.service';

describe('Service: Examples', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamplesService]
    });
  });

  it('should ...', inject([ExamplesService], (service: ExamplesService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XtermKeyhandlerService } from './xterm-keyhandler.service';

describe('Service: XtermKeyhandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XtermKeyhandlerService]
    });
  });

  it('should ...', inject([XtermKeyhandlerService], (service: XtermKeyhandlerService) => {
    expect(service).toBeTruthy();
  }));
});

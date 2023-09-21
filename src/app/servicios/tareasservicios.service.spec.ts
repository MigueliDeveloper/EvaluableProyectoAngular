/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TareasserviciosService } from './tareasservicios.service';

describe('Service: Tareasservicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasserviciosService]
    });
  });

  it('should ...', inject([TareasserviciosService], (service: TareasserviciosService) => {
    expect(service).toBeTruthy();
  }));
});

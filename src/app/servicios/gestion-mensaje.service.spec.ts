/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestionMensajeService } from './gestion-mensaje.service';

describe('Service: GestionMensaje', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionMensajeService]
    });
  });

  it('should ...', inject([GestionMensajeService], (service: GestionMensajeService) => {
    expect(service).toBeTruthy();
  }));
});

import { Injectable } from '@angular/core';
import { ServiciosBD } from '../models/lstServicios';

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100", "Atención al cliente","Este servicio se encarga de responder a las consultas y solicitudes de los clientes. Puede estar relacionado con otros servicios, como el servicio de ventas o el servicio de soporte técnico.", 60,"./assets/media/consultoria.png", true), 
                new ServiciosBD("101", "Servicio de ventas","Este servicio se encarga de vender los productos o servicios de la empresa.", 160,"./assets/media/frontend.jpg", true), 
                new ServiciosBD("102", "Servicio de soporte técnico","Este servicio se encarga de resolver los problemas técnicos que los clientes puedan tener con los productos o servicios de la empresa", 160,"./assets/media/backend.png", true),
                new ServiciosBD("103", "Servicio de marketing","Este servicio se encarga de promover los productos o servicios de la empresa. Puede estar relacionado con otros servicios, como el servicio de ventas o el servicio de atención al cliente1", 300,"./assets/media/fullstack.jpg", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}

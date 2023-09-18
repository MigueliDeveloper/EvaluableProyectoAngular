import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { GestionMensaje } from '../models/gestion-mensaje';


@Injectable({
    providedIn: 'root'
})

export class GestionmensajeService{

    url= 'http://localhost:2700/api/mensajes/';

    constructor(private _http: HttpClient){}

    getMensaje(): Observable<any>{
        return this._http.get(this.url);
    
    } 
    eliminarMensaje(id: string): Observable<any>{
        return this._http.delete(this.url+id);
    
    } 
    guadarMensaje(mensaje: GestionMensaje): Observable<any>{
 
        return this._http.post(this.url, mensaje);

    } 
    obtenerMensaje(id: string): Observable<any>{
        return this._http.get(this.url+id);


    } 
    editarMensaje(id: string, mensaje: GestionMensaje): Observable<any>{
        return this._http.put(this.url+id, mensaje);
    }

}


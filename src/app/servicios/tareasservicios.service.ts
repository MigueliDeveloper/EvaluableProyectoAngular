import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tareasBD } from '../models/tareas';

@Injectable({
    providedIn: 'root'

})
export class Tareasservicios {

    url = 'http://localhost:3700/api/tareas'

constructor( private http: HttpClient) { }

    getTareas (): Observable<any>{;
        return this.http.get(this.url)
    }

    eliminarTareas(id: string): Observable<any>{
        return this.http.delete(this.url + id);
    }

    guardarTareas(tarea: tareasBD): Observable<any>{
        return this.http.post(this.url, tarea)
    }

    obtenerTareas(id:string): Observable<any>{
        return this.http.get(this.url+ id);
    }

    editarTareas(id: string, tarea: tareasBD): Observable<any>{
        return this.http.put(this.url + id, tarea);
    }

}

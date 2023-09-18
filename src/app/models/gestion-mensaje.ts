import { Injectable } from "@angular/core";

@Injectable({

   providedIn: 'root' 
})


export class GestionMensaje{
    static _id: string;
    constructor(
        public name: String,
        public duration: Number,
        public description: String,
        public category: String,
        public fotoPortada: String,
    ){}
        
}
export class tareasBD{
    public _id?: string
    public nombre: string
    public descripcion: string
    public tareaIniciada: string
    public tareaPendiente : string
    public tareaFinalizada: string

    constructor(nombre: string, descripcion: string, tareaIniciada: string, tareaPendiente : string, tareaFinalizada: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tareaIniciada = tareaIniciada;
        this.tareaPendiente = tareaPendiente;
        this.tareaFinalizada = tareaFinalizada;
    }
    

}
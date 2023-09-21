export class tareasBD{
    public _id?: string
    public nombre: string
    public descripcion: string
    public tareaIniciada: boolean
    public tareaPendiente : boolean
    public tareaFinalizada: boolean

    constructor(nombre: string, descripcion: string, tareaIniciada: boolean, tareaPendiente : boolean, tareaFinalizada: boolean){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tareaIniciada = tareaIniciada;
        this.tareaPendiente = tareaPendiente;
        this.tareaFinalizada = tareaFinalizada;
    }
    

}
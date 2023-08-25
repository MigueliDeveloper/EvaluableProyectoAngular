import { Component,  OnInit} from '@angular/core';
import { tareasBD } from '../models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {

  public tareasAll: tareasBD[];
  public id: number;
  public nombre: string;
  public descripcion: string;


  constructor(){
    this.id = 0;
    this.nombre= "";
    this.descripcion= "";
    this.tareasAll=[];
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.inicializarTareas();
  }
  
  private inicializarTareas(){
    this.tareasAll = [
      new tareasBD(1, 'Tarea 1', 'Descripción de la tarea 1',true ,true,false),
      new tareasBD(2, 'Tarea 2', 'Descripción de la tarea 2',false,false,false),
    ];

  }

}

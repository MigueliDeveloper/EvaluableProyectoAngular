import { Component, OnInit } from '@angular/core';
import { tareasBD } from '../models/tareas';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  public tareasAll: tareasBD[];
  // public id: number;
  public nombre: string;
  public descripcion: string;
  public tareaIniciada: string;
  public tareaPendiente : string;
  public tareaFinalizada: string;


  constructor(){
    // this.id = 0;
    this.nombre= "";
    this.descripcion= "";
    this.tareaIniciada= "";
    this.tareaPendiente= "";
    this.tareaFinalizada= "";
    this.tareasAll=[];
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.inicializarTareas();
  }

  private inicializarTareas(){
    this.tareasAll = [
      new tareasBD('Tarea 1', 'Descripción de la tarea 1','', '', ''),
      new tareasBD('Tarea 2', 'Descripción de la tarea 2','', '', ''),
    ];

  }



}

import { Component, OnInit } from '@angular/core';
import { jefesBD } from '../models/jefes';

@Component({
  selector: 'app-jefes',
  templateUrl: './jefes.component.html',
  styleUrls: ['./jefes.component.css']
})

export class JefesComponent implements OnInit{
  public jefesAll: jefesBD[];
  public nombreJefe: String;
  public edadJefe: number;
  public nombreDepartamentoJefe: String;
  public areaEspecializacionJefe: String;

  constructor(){
    this.jefesAll=[]
    this.nombreJefe= "";
    this.edadJefe= 0;
    this.nombreDepartamentoJefe= "";
    this.areaEspecializacionJefe= "";
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.inicializarJefe();
  }

  private inicializarJefe(){
    this.jefesAll=[
      new jefesBD( "Nombre1","Apellido1",  30, "Departamento1", "Especialización1",5, 5000,"123456789","correo1@example.com","foto1.jpg"),
      new jefesBD("Nombre2","Apellido2", 35,"Departamento2", "Especialización2",8, 7000,"987654321","correo2@example.com","foto2.jpg"),
      new jefesBD("Nombre3","Apellido3", 40,"Departamento3", "Especialización3",12, 9000,"567894321","correo3@example.com","foto3.jpg"),

    ];
  }

}

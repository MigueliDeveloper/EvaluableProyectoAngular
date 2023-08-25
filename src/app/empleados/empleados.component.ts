import { Component, OnInit } from '@angular/core';
import { empleadosBD } from '../models/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit{

  public empleadosAll: empleadosBD[]; 
  public nombreEmpleados: string;
  public apellidoEmpleados: string;
  public nombreDepartamento: string;
  public estadoDeLaTarea: boolean;

  constructor(){

    this.nombreEmpleados="";
    this.apellidoEmpleados="";
    this.nombreDepartamento= "";
    this.estadoDeLaTarea= false;
    this.empleadosAll=[]
  }


  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.inicializarEmpleados();

  }

  private inicializarEmpleados(){
    this.empleadosAll =[
      new empleadosBD( "Juan", "Pérez", "Ventas", 3, 5000, "juan.perez@example.com", "123456789", "ruta/a/la/foto.jpg", true),
      new empleadosBD( "María", "González","Recursos Humanos", 5, 6000, "maria.gonzalez@example.com", "987654321", "ruta/a/la/foto.jpg", true),
      new empleadosBD( "Ana", "López","Marketing", 2, 4500, "ana.lopez@example.com", "555555555", "ruta/a/la/foto.jpg", true),
      new empleadosBD( "Pedro", "Ramírez","Desarrollo de Productos", 4, 7000, "pedro.ramirez@example.com", "999999999", "ruta/a/la/foto.jpg", false),
    ];

  }

}



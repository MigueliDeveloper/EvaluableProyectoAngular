import { Component, OnInit} from '@angular/core';
import { empleadosBD } from '../models/empleados';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  public empleadosAll: empleadosBD[];
  public nombreEmpleados: string;
  public apellidoEmpleados: string;
  public nombreDepartamento: string;
  public anioEnLaEmpresa: number;
  public salarioEmpresa: number;
  public correoEmpresa: String;
  public telefonoEmpresa: String;
  public fotoEmpresa: String;
  public estadoDeLaTarea: boolean;

  constructor(){

    this.nombreEmpleados= "";
    this.apellidoEmpleados= "";
    this.nombreDepartamento= "";
    this.anioEnLaEmpresa= 0;
    this.salarioEmpresa= 0;
    this.correoEmpresa= "";
    this.telefonoEmpresa= "";
    this.fotoEmpresa= "";
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

  //Mandar a Git

}

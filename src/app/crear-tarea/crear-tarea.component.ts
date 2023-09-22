import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { Tareasservicios } from '../servicios/tareasservicios.service';
import { tareasBD } from '../models/tareas';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})

export class CrearTareaComponent implements OnInit {

  tareaForm: FormGroup;
  titulo = 'Crear tarea';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _tareaService: Tareasservicios, // tareas Servicio
                private aRouter: ActivatedRoute){

    this.tareaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tareaIniciada: [''],
      tareaPendiente: [''],
      tareaFinalizada : ['']
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTarea(){
    // tareasBD Modelo
    const TAREA: tareasBD = {
      nombre: this.tareaForm.get('nombre')?.value,
      descripcion: this.tareaForm.get('descripcion')?.value,
      tareaIniciada:this.tareaForm.get('tareaIniciada')?.value,
      tareaPendiente: this.tareaForm.get('tareaPendiente')?.value,
      tareaFinalizada:this.tareaForm.get('tareaFinalizada')?.value,
    } 

    if(this.id !== null){
      // Editamos Curso
      this._tareaService.editarTareas(this.id, TAREA).subscribe(data =>{
        this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      })
    } else{
      // Agregamos Curso
      console.log(TAREA);
        this._tareaService.guardarTareas(TAREA).subscribe(data => {
        this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      })
    }
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar curso';
      this._tareaService.obtenerTareas(this.id).subscribe(data => {
        this.tareaForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          tareaIniciada: data.tareaIniciada,
          tareaPendiente: data.tareaPendiente,
          tareaFinalizada: data.tareaFinalizada
        })
      })
    }
  }
}
 
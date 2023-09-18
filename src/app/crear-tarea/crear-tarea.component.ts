import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { GestionMensaje } from '../models/gestion-mensaje';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})

export class CrearTareaComponent implements OnInit {
  crearForm: FormGroup;  // Definir FormGroup para el formulario reactivo


  constructor(private fb: FormBuilder, private gestionMensaje: GestionMensaje){ // Inyectar FormBuilder
  this.crearForm = this.fb.group({
    name: ['', Validators.required],
    durarion: ['', [Validators.required, Validators.email]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    category: ['', [Validators.required, Validators.minLength(8)]],
    fotoPortada: ['']

  });
}
 
  ngOnInit(): void{
    
  }

  onSubmit() {
    const mensaje = new GestionMensaje(
      
      this.crearForm.value.name,
      this.crearForm.value.duration,
      this.crearForm.value.description,
      this.crearForm.value.category,
      this.crearForm.value.fotoPortada
    );
    
    // this.gestionMensaje.guardar(mensaje).subscribe((data) => {
    //   // La tarea se ha creado correctamente.
    // }, (error) => {
    //   // Ha ocurrido un error al crear la tarea.
    // });
  }

  }
  
  // submitForm(){
  //   if(this.registrationForm.valid) {
  //     console.log('Formulario enviado:');
  //     console.log('Nombre:', this.registrationForm.value.nombreR);
  //     console.log('Email', this.registrationForm.value.email);
  //     console.log('Contraseña:', this.registrationForm.value.contrasenaR);
  //   }
  // }



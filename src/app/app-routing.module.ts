import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { EmpleadosComponent } from './empleados/empleados.component';
import { JefesComponent } from './jefes/jefes.component';
import { TareasComponent } from './tareas/tareas.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';

const routes: Routes = [
  { path: '', component: JefesComponent},
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'jefes', component: JefesComponent },
  { path: 'tareas', component: TareasComponent }, 
  { path: 'listaServicios', component: ListaServiciosComponent, 
  children: [{path: 'gestionServicios', component: GestionServiciosComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

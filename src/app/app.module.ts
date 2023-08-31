import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { JefesComponent } from './jefes/jefes.component';
import { TareasComponent } from './tareas/tareas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { JefeComponent } from './jefe/jefe.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    JefesComponent,
    TareasComponent,
    EmpleadoComponent,
    JefeComponent,
    TareaComponent,
    FormularioAccesoComponent,
    FormularioRegistroComponent,
    GestionServiciosComponent,
    ListaServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

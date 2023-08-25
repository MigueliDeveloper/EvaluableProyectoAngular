import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { JefesComponent } from './jefes/jefes.component';
import { TareasComponent } from './tareas/tareas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { JefeComponent } from './jefe/jefe.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    EmpleadosComponent,
    JefesComponent,
    TareasComponent,
    EmpleadoComponent,
    JefeComponent,
    TareaComponent,
    FormularioAccesoComponent,
    FormularioRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

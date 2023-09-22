import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { JefesComponent } from './jefes/jefes.component';
import { TareasComponent } from './tareas/tareas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { JefeComponent } from './jefe/jefe.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';


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
    ListaServiciosComponent,
    FooterComponent,
    HeaderComponent,
    CrearTareaComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AlumnosComponent,
    CrearAlumnoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

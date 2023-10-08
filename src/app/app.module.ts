import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrosComponent } from './components/carros/carros.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const appRoutes:Routes=[
{path:'', component:HomeComponent},
{path:'carros', component:CarrosComponent},
{path:'usuarios', component:IncidenciasComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncidenciasComponent,
    CarrosComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

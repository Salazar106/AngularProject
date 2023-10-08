import { Component, OnInit } from '@angular/core';
import { AsesoresService } from 'src/app/services/asesores/asesores.service';
import { IncidenciasService } from 'src/app/services/incidencias/incidencias.service';
import { Validators, AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { pipe } from 'rxjs';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  editIncidenciaData: any;

  editUser: FormGroup;
  newUser: FormGroup;
  asesores: any;
  rows: any;
  incidencias: any;
  dia = new Date().getDate();
  mes = new Date().getMonth();
  anio = new Date().getFullYear();
  horas = new Date().getHours();
  minutos = new Date().getMinutes();
  fecha = this.anio + "/" + this.mes + "/" + this.dia + ", " + this.horas + ":" + this.minutos;

  constructor(
    private IncidenciasService: IncidenciasService,
    private asesoresService: AsesoresService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {

    //*--- formGroup de editar----
    this.editUser = this.fb.group({
      id    : ["", Validators.required],
      name  : ["", Validators.required],
      cedula: ["", Validators.required],
      phone : ["", Validators.required],
      email : ["", Validators.required]

    }),

      //*--- formGroup de Crear----

      this.newUser = this.fb.group({
        name  : ["", Validators.required],
        cedula: ["", Validators.required],
        phone : ["", Validators.required],
        email : ["", Validators.required],

      })
  }



  ngOnInit(): void {
    // this.getUsers();
    // this.getIncidencias();
    // pipe;


  }
  createUser() {
    console.log(this.newUser.value);
    this.newUser.reset();
    // this.IncidenciasService.newIncidencia(this.newUser.value).subscribe((res: any) => {
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Registro exitoso",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   this.getIncidencias();
    // })
          


  }
  estadoAsesorToEdit: any;


  //?---Declaro los valores del formulario de editar----
  declareEditData(row: any) {
    this.editIncidenciaData = row;
    // console.log(this.editIncidenciaData.id);
    
    this.editUser.controls["id"].setValue(row.id);
    this.editUser.controls["cedula"].setValue(row.cedula);
    this.editUser.controls["descripcion"].setValue(row.descripcion);
    this.editUser.controls["asesor"].setValue(row.asesor);
    this.editUser.controls["estado"].setValue(row.nestado)
  }

  //?--Funcion de Editar--------
  editIncidencia() {
    let edit={
      cedula:this.editUser.value.cedula,
      descripcion:this.editUser.value.descripcion,
      asesor:this.editUser.value.asesor,
      estado:this.editUser.value.estado,

    }

    this.IncidenciasService.editIncidencia(this.editIncidenciaData.id,edit).subscribe((res: any) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Edicion Exitosa",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getIncidencias();
    })
  }

  //?------- traigo todos los asesores de la bd--------
  getUsers() {
    this.asesoresService.getAsesor().subscribe((res: any) => {
      this.asesores = res

    })
  }
  //?--------traigo todas la lista de incidencias de la db-------
  getIncidencias() {
    this.IncidenciasService.getIncidencias().subscribe((res: any) => {
      console.log(res);
      this.incidencias = res;

    })
  }



}
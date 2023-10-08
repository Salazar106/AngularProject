import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl, UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { pipe } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  implements OnInit{
  editUser: UntypedFormGroup;
  newUser: UntypedFormGroup;
  constructor(
    // private IncidenciasService: IncidenciasService,
    // private asesoresService: AsesoresService,
    private formBuilder: UntypedFormBuilder,
    private fb: UntypedFormBuilder
  ) {

    //*--- formGroup de editar----
    this.editUser = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      cedula: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required]

    }),

      //*--- formGroup de Crear----

      this.newUser = this.fb.group({
        name   : ["", Validators.required],
        cedula : ["", Validators.required],
        phone  : ["", Validators.required],
        email  : ["", Validators.required],
        

      })
  }

  ngOnInit(): void {
    
    pipe;

  }

  createUser(){
    console.log(this.newUser);
    
  }

}

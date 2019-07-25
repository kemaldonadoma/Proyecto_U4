import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../usuario.service";
import { CuentaService } from "../cuenta.service";
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
//  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cuenta;
  constructor( private apiCuenta:CuentaService,private router: ActivatedRoute,private apiUser:UsuarioService,private formBuilder:FormBuilder) {
   
    this.router.paramMap.subscribe(
      (params)=>{
        this.apiCuenta.consultaCategorias(params.get('id')).subscribe(
          (cat_result)=>{
            
            this.asigCat(cat_result);
            console.log("Test de categorias sobre id");
            console.log(this.cuenta);
          },
          (err)=>{
            console.log(err);
            this.cuenta = err;
          }
        );
        
      },
      ()=>{}
    );

    //
    


   }

  asigCat(cat){
    this.cuenta = cat.data[0].categorias;
  }

  ngOnInit() {
  }

}

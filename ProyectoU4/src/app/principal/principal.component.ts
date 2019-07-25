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

  formTotal;
  public tip = 1;

  constructor( private apiCuenta:CuentaService,private router: ActivatedRoute,private apiUser:UsuarioService,private formBuilder:FormBuilder) {
   
    this.createForm();

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
   }

  asigCat(cat){
    this.cuenta = cat.data[0].categorias;
  }

  ngOnInit() {
  }

  load(){
    location.reload();
  }

createForm(){
    this.formTotal = this.formBuilder.group({
      monto:[''],
      agregar:[''],
      description:['']
    });
  }

  guardarMovimiento(movimientoToSave) {
    console.log(movimientoToSave);
    this.router.params.subscribe(

      (params) => {
        if(this.tip == 1 ){
          this.apiCuenta.agregarTotal(params.id,movimientoToSave.monto,{desc:movimientoToSave.description}).subscribe(
            (a) =>{
              console.log("se agrego correctamente a total");
              this.load();
            },
            (b) => {
              console.log("algo salio mal en agregar");
            }
          )
    
        }else{
          this.apiCuenta.restarTotal(params.id,movimientoToSave.monto,{desc:movimientoToSave.description}).subscribe(
            (a) =>{
              console.log("se resto correctamente a total");
              this.load();
            },
            (b) => {
              console.log("algo salio mal en insertar");
            }
          )
    
        }
      },
      (err) => {

      }

    )

  }

  tipo(num){
    this.tip = num;
    console.log(this.tip);
  }


}

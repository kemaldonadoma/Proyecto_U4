import { UsuarioService } from "../usuario.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


//fecha cantidad  desc 

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-movimientos-total',
  templateUrl: './movimientos-total.component.html'

})

export class MovimientosTotalComponent implements OnInit {


  formCategoria;

  movimiento = [];
  total;
  usuario;
nombre; 
  constructor( private router:Router, 
    private cuentaService: CuentaService, 
    private activaroute: ActivatedRoute,
    private apiUser:UsuarioService) {

    this.activaroute.paramMap.subscribe(
      (params)=>{
        this.cuentaService.consultaMovimiento(params.get('id')).subscribe(
          (mov_resultados)=>{
            console.log(mov_resultados);
            console.log(params.get('id'));
           // this.movimiento=[mov_resultados];
           this.asigMov(mov_resultados);
           this.asigNom(mov_resultados);
           console.log("exito");
            console.log(this.movimiento);
          },
          (err)=>{
            console.log(err);
            this.movimiento =err;
          }
          
        )
        
      }

    );
  /*  this.router.paramMap.subscribe(
      (params)=>{
        this.apiUser.findById(params.get('id')).subscribe(
          (cat_result)=>{
            this.asigNom(cat_result);
          },
          (err)=>{
            console.log(err);
            this.nombre = err;
          }
        );
        
      },
      ()=>{}
    );
*/
   
  


   }

   

  

   asigMov(mov){
    this.movimiento = mov.movimientos;
  }

  asigNom(us){
    this.usuario = us.data.nombre;
  }
  refresh(){
    this.activaroute.params.subscribe(
      (params)=>{
        this.router.navigate(['/',params.id,'movimientos-total'])
      },
      (e)=>{

      }

    )
  }

  regresar(){
    this.activaroute.params.subscribe(
      (params)=>{
        this.router.navigate(['/',params.id])
      },
      (e)=>{

      }

    )
  }

  load(){
    location.reload();
  }

   ngOnInit() {
  }
}


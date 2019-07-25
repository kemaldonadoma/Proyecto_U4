import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';
import { CuentaService } from '../cuenta.service';


@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html'
  //styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent implements OnInit {

  formCategoria;
  public tip = 1;

  constructor(private formBuilder: FormBuilder, private router:Router, private cuentaService: CuentaService, private activaroute: ActivatedRoute) {

    this.createForm();
   }

   
   createForm(){
    this.formCategoria = this.formBuilder.group({
      monto:[''],
      agregar:[''],
      description:['']
    });
  }

  guardarMovimiento(movimientoToSave) {
    console.log(movimientoToSave);
    this.activaroute.params.subscribe(
      (params) => {
        if(this.tip == 1 ){
          this.cuentaService.agregarACategoria({desc:movimientoToSave.description},params.id,params.nom,movimientoToSave.monto).subscribe(
            (a) =>{
              console.log("se agrego correctamente");
            },
            (b) => {
              console.log("algo salio mal");
            }
          )
    
        }else{
          this.cuentaService.restarACategoria(movimientoToSave.description,params.id,params.nom,movimientoToSave.monto).subscribe(
            (a) =>{
              console.log("se resto correctamente");
            },
            (b) => {
              console.log("algo salio mal");
            }
          )
    
        }
      },
      (err) => {

      }

    )
  /* this.cuentaService.agregarACategoria(usuarioToSave)
    .subscribe(
      (usr)=> {
      
        console.log(usr);
        this.iniciaCuenta(usuarioToSave.total, usr);
        console.log(usuarioToSave.total);
        
        this.router.navigate(['']);


      },

      (err)=>{
        console.log(err);
      }
    );  */
  }

  tipo(num){
    this.tip = num;
    console.log(this.tip);
  }

  ngOnInit() {
  }

}

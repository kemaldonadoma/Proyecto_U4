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
  movimiento;

  constructor(private formBuilder: FormBuilder, private router:Router, private cuentaService: CuentaService, private activaroute: ActivatedRoute) {

    this.activaroute.paramMap.subscribe(
      (params)=>{
        this.cuentaService.consultaMovCat(params.get('id'),params.get('nom')).subscribe(
          (mov_resultados)=>{
            console.log(mov_resultados);
            console.log(params.get('id'),params.get('nom'));
            this.asigMov(mov_resultados);
            console.log("exito");
            console.log(this.movimiento);
          },
          (err)=>{
            console.log(err);
            this.movimiento =err;
          }
        )
      },
      ()=>{

      }

    );




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
              this.load();
            },
            (b) => {
              console.log("algo salio mal");
            }
          )
    
        }else{
          this.cuentaService.restarACategoria(movimientoToSave.description,params.id,params.nom,movimientoToSave.monto).subscribe(
            (a) =>{
              console.log("se resto correctamente");
              this.load();
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
  }

  tipo(num){
    this.tip = num;
    console.log(this.tip);
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
  asigMov(mov){
    this.movimiento = mov.movimientos.categorias[0].movimientos;
  }
  eliminar(id,nom){
    /* this.cuentaService.eliminarCategoria() */

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';
import { CuentaService } from '../cuenta.service';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html'
  //styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent implements OnInit {

  formCategoria;
  public tip = 1;
  movimiento;
  nombre;
  saldo;
  nombreCat;

  //movimiento = [{},{},{}];
  constructor(private formBuilder: FormBuilder, private router:Router, private cuentaService: CuentaService, 
    private activaroute: ActivatedRoute, private usuarioService: UsuarioService) {

    this.activaroute.paramMap.subscribe(
      (params)=>{
        this.cuentaService.consultaMovCat(params.get('id'),params.get('nom')).subscribe(
          (mov_resultados)=>{
         // this.saldo = mov_resultados.movimientos.categorias[0].saldo;
        //    this.nombreCat = mov_resultados.movimientos.categorias[0].nombre;
            console.log(this.saldo);
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
    this.activaroute.paramMap.subscribe(
      (params)=>{
        this.usuarioService.findById(params.get('id')).subscribe(
          (usr_resultados)=>{
        //  this.nombre = usr_resultados.data.nombre;
          },
          (err)=>{
            console.log(err);
            this.nombre =err;
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
          this.cuentaService.restarACategoria({desc:movimientoToSave.description},params.id,params.nom,movimientoToSave.monto).subscribe(
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

  eliminar(){
    this.activaroute.params.subscribe(
      (params)=>{
        this.cuentaService.eliminarCategoria(params.id,params.nom).subscribe(
          (a)=>{
            console.log("se elimino correctamente");
            this.router.navigate(['',params.id]);
          },
          (b)=>{
            console.log("hay un error");
          }
        )

      },
      ()=>{
      }
    )
  }

  ngOnInit() {
  }

}

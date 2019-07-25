import { Component, OnInit } from '@angular/core';
import { CuentaService } from "../cuenta.service";
import { FormGroup, FormControl, FormBuilder, Validators,FormsModule } from '@angular/forms';

import {Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html'//,
  //styleUrls: ['./categoria-crear.component.css']
}) 
export class CategoriaCrearComponent implements OnInit {

  public categorias;
  public id:string;
  formCategoria;

  constructor(private apicuenta:CuentaService, private formBuilder:FormBuilder,private activatedRoute: ActivatedRoute, private router:Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  createForm(){
    this.formCategoria = this.formBuilder.group({
      nomcat:['',[Validators.required,
        Validators.minLength(4)]],
      monto:['',[Validators.required]]
    });
  }
 
  ngOnInit() {
      this.activatedRoute.params.subscribe(paramsId => {
          this.id = paramsId.id;
      });
      //console.log(this.id);
      //this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.apicuenta.consultaCategorias(this.id)
      .subscribe(
        (cat_result)=>{
          this.categorias = cat_result;
          console.log(this.categorias);
        },
        (err)=>{
          console.log(err);
          this.categorias = err;
        }
      );
        this.createForm();
  }

  regresar(){
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.router.navigate(['/',params.id])
      },
      (e)=>{

      }

    )
  }

  crearCategoria(objeto) {
    console.log(objeto);
    var {nomcat,monto}=objeto;
    var id=this.id;
    console.log(id,nomcat,monto);
    this.apicuenta.crearCategoria(id,nomcat,monto)
    .subscribe(
      (cat)=> {
        this.apicuenta.consultaCategorias(id).subscribe(
          (cat_result)=>{
            this.categorias = cat_result;
            
            console.log(this.categorias);
            this.regresar();
          },
          (err)=>{
            console.log(err);
            this.categorias = err;
          }
        );
        this.createForm();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
 
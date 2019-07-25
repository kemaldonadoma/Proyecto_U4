import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';
//import { FormGroup, FormControl, FormBuilder, Validators,FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movimientos-categorias',
  templateUrl: './movimientos-categorias.component.html'
//  styleUrls: ['./movimientos-categorias.component.css']
})
export class MovimientosCategoriasComponent implements OnInit {
  categorias:any = [];
  categoria;

  constructor(private cuentaservice: CuentaService, private activatedRoute: ActivatedRoute, private router:Router) {

    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.cuentaservice
        .consultaMovimiento(params.get('id'))
        .subscribe((result)=>{
      this.categorias = result["movimientos"];
    },
     (err)=>{ 
       console.log(err); 
       this.categorias = [];
      });

    });
  }

  back(){
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.router.navigate(['/',params.id])
      },
      (e)=>{

      }
    )
  }

  ngOnInit() { }
}

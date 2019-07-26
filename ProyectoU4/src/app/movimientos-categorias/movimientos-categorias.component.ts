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

  categorias: any;
  categoria;
 // data0:any;

  constructor(private cuentaservice: CuentaService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {

    //this.categorias = {};
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.cuentaservice
          .todosMovimientos(params.get('id'))
          .subscribe((result) => {
            let res = result;
            setTimeout(()=>{
                this.categorias = res as any; 
                console.log(); 

            },
            1000
            );
            

           // this.categorias = result;
          //  alert('msg' + res);
            console.log(this.categorias);
          },
            (err) => {
              console.log(err);
             // this.categorias = [];
            });

      });
  }

  refresh() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.router.navigate(['/', params.id, 'movimientos-categoria'])
      },
      (e) => {

      }

    )
  }

  back() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.router.navigate(['/', params.id])
      },
      (e) => {

      }
    )
  }

  load() {
    location.reload();
  }

  ngOnInit() { }
}

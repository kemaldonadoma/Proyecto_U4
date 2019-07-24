import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaService } from '../cuenta.service';
import { ActivatedRoute } from '@angular/router';

//fecha cantidad  desc 

@Component({
  selector: 'app-movimientos-total',
  templateUrl: './movimientos-total.component.html'
//  styleUrls: ['./movimientos-total.component.css']
})
export class MovimientosTotalComponent {
 movimiento: any = {};
 movimientos: any []  = [] ;
}
/*
    constructor(private router: ActivatedRoute, private cuenta: CuentaService) {
                  this.router.params.subscribe( params => {

        this.consultaMovimiento( params[' id '] );

      });

    }
    */
/*
    consultaMovimiento( id ) {
      this.cuenta.consultaMovimiento( id )
            .subscribe( cuenta => {
              console.log(cuenta);
              this.cuenta = cuenta;
            });
          }
  }
*/
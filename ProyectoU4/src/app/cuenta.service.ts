import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'aplication-json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  public inicializarCuenta(total,id) {
    return this.http.post("http://167.71.202.42/api/cuentas/"+id,total);
  } 

  public agregarTotal(id,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/agregar/"+cant,null);
  }

  public restarTotal(id,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/restar/"+cant,null);
  }

  public consultaMovimiento(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/movimientos");
  }

  public consultaCategorias(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id);
  }

  public crearCategoria(id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/crear/"+nom+cant,null);
  }

  


/*  
    ////////////////////categorias


    //en la url se manda el parametro del nombre de la categoria a eliminar
    router.put('/:userId/categorias/eliminar/:nom', (req, res) =>
    cuentaCtrl.eliminarCategoria(req, res));

     //se manda en el url la el nombre de la categoria y cantidad a agregar 
    router.put('/:userId/categorias/agregar/:nom/:cant', (req, res) =>
    cuentaCtrl.agregarCategoria(req, res));

     //se manda en el url la el nombre de la categoria y cantidad a restar 
    router.put('/:userId/categorias/restar/:nom/:cant', (req, res) =>
    cuentaCtrl.restarCategoria(req, res));
    
    //se manda en la url el nombre de la categoria de la cual se van a consultar los movimientos
    router.get('/:userId/categorias/movimientos/:nom', (req, res) =>
    cuentaCtrl.consultarMovCat(req, res));

    // se solicitan todos los movimientos  de CATEGORIAS
    router.get('/:userId/categorias/movimientos', (req, res) =>
    cuentaCtrl.consultarMov(req, res));


   */
}

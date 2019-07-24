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

  //inicializa la cuenta con un total

  public inicializarCuenta(total,id) {
    return this.http.post("http://167.71.202.42/api/cuentas/"+id,total);
  } 

  //agrega al total de la cuenta

  public agregarTotal(id,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/agregar/"+cant,null);
  }

  //resta al total de la cuenta

  public restarTotal(id,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/restar/"+cant,null);
  }

  //consulta movimientos de total

  public consultaMovimiento(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/movimientos");
  }

  //consulta todas las categorias por el id de la cuenta

  public consultaCategorias(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id);
  }

  //crea categoria con un saldo inicial
  public crearCategoria(id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/crear/"+nom+"/"+cant,null);
  }

  //elimina categoria

  public eliminarCategoria(id,nom){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/eliminar/"+nom,null);
  }

  //agrega cantidad a categoria
  
  public agregarACategoria(desc,id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/agregar/"+nom+"/"+cant,desc);
  }
  
  //resta cantidad a categoria

  public restarACategoria(desc,id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/restar/"+nom+"/"+cant,desc);
  }

  //consulta los movimientos de una categoria

  public consultaMovCat(id,nom){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/categorias/movimientos/"+nom);
  }

  //consulta todos los movimientos de todas las categorias

  public todosMovimientos(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/categorias/movimientos");
  }
/*  
    ////////////////////categoria
   */
}

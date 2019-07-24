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
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/crear/"+nom+"/"+cant,null);
  }

  public eliminarCategoria(id,nom){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/eliminar/"+nom,null);
  }
  
  public agregarACategoria(desc,id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/agregar/"+nom+"/"+cant,desc);
  }

  public restarACategoria(desc,id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/restar/"+nom+"/"+cant,desc);
  }

  public consultaMovCat(id,nom){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/categorias/movimientos/"+nom);
  }

  public todosMovimientos(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id+"/categorias/movimientos");
  }
/*  
    ////////////////////categoria
   */
}

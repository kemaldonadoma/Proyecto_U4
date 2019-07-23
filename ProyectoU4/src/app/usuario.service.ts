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
export class UsuarioService {

  constructor(private http: HttpClient) { }
  //todas las rutas de usuario
  
 /*  public crearUsuario(usuario) {
    return this.http.put("http://167.71.202.42/");
  } */
  /* router.post('/', (req, res) => UsuarioCtrl.createUser(req, res));

          
  router.get('/', (req, res) => UsuarioCtrl.findAll(req, res));

  router.get('/login/:email/:password', (req, res) =>UsuarioCtrl.login(req, res));


  router.put('/:id', (req, res) => UsuarioCtrl.Actualizar(req, res));

  router.delete('/:id', (req, res) => UsuarioCtrl.Eliminar(req, res));

  router.get('/:id', (req, res) => UsuarioCtrl.findById(req, res));
   */
  ///



/* public agregarCategoria(idUse,nomCat,cant){
  return this.http.put("http://ip/api/"+idUse+"/"+nomCat+"/"+cant);
}

  public getProducts(){
    return this.http.get("http://134.209.202.112/api/v1/products/");
  }

  getProductById(id){
    return this.http.get("http://134.209.202.112/api/v1/products/"+id);
  }

  addProduct(product){
    return this.http.post("http://134.209.202.112/api/v1/products/",product,httpOptions);
  } */
  
}









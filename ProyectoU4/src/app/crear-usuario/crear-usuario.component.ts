import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html'
 // styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formUsuario;
  public usuarios;


  constructor( private apiusuario: UsuarioService, private formBuilder: FormBuilder, private router:Router, private cuentaService: CuentaService) {

    this.createForm();

   }

   createForm(){
    this.formUsuario = this.formBuilder.group({
      nombre:['',[Validators.required,
        Validators.minLength(4)]],
      email:['',[Validators.required,
        Validators.minLength(4)]],
      password:['',[Validators.required,
        Validators.minLength(4)]],
      total:['']
    });
  }

  guardarUsuario(usuarioToSave) {
    console.log(usuarioToSave);
  this.apiusuario.crearUsuario(usuarioToSave)
    .subscribe(
      (usr)=> {
      
        console.log(usr);
        this.iniciaCuenta(usuarioToSave.total, usr);
        console.log(usuarioToSave.total);
        /* this.apiusuario.findAll().subscribe(
          (usuario_result)=>{
            this.usuarios = usuario_result;
            console.log(this.usuarios);
          },
          (err)=>{
            console.log(err);
            this.usuarios = err;
          }
        );
        this.createForm(); */
        this.router.navigate(['']);


      },

      (err)=>{
        console.log(err);
      }
    ); 
  }

  iniciaCuenta(total,usr){

      this.cuentaService.inicializarCuenta({total:total},usr.data._id).subscribe(
        (ini) =>{
          console.log("se inicializo cuenta");
        },
        (err) =>{
          console.log(err);
        }
      )
  }

  ngOnInit() {
  }

}

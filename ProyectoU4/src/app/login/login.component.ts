import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../usuario.service";
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
//  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usrId;
  formLogin;
  acceso = false;
  constructor(private router: Router,private apiUser:UsuarioService,private formBuilder:FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.formLogin = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]

    });
  }


login(val){
  console.log("test de fomr");
  console.log(val);
  this.apiUser.loginUs(val.email,val.password).subscribe(
    (resul)=>{
      this.asignarUs(resul);
      this.router.navigate(['/',this.usrId])
      console.log(resul);
    },
    (err)=>{
      console.log(err);
      this.acceso=false;
     // this.products = err;
    }
  );
}



asignarUs(us){
  this.usrId = us.data.usuario._id;
}

  ngOnInit() {
  }

}

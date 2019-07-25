import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { CategoriaCrearComponent } from './categoria-crear/categoria-crear.component';
import { MovimientosTotalComponent } from './movimientos-total/movimientos-total.component';
import { MovimientosCategoriasComponent } from './movimientos-categorias/movimientos-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    LoginComponent,
    PrincipalComponent,
    CategoriaDetailsComponent,
    CategoriaCrearComponent,
    MovimientosTotalComponent,
    MovimientosCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

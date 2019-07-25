import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MovimientosCategoriasComponent } from './movimientos-categorias/movimientos-categorias.component';
import { MovimientosTotalComponent } from './movimientos-total/movimientos-total.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { CategoriaCrearComponent } from './categoria-crear/categoria-crear.component';
const routes: Routes = [
//
{path:'', component:LoginComponent},
{path:'crear-usuario', component:CrearUsuarioComponent},
{path:':id', component:PrincipalComponent},
{path:':id/movimientos-total', component:MovimientosTotalComponent},
{path:':id/movimientos-categoria', component:MovimientosCategoriasComponent},
{path:':id/crear', component:CategoriaCrearComponent},
{path:':id/categoria/:nom', component:CategoriaDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

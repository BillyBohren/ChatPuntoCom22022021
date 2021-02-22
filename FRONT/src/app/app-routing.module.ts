import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevaPersonaComponent } from './persona/nueva-persona.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaPersonaComponent },
  { path: 'detalle/:id', component: DetallePersonaComponent },
  { path: 'nueva', component: NuevaPersonaComponent },
  { path: 'editar/:id', component: EditarPersonaComponent },
  { path: '**', redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

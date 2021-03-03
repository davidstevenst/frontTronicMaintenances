import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
<<<<<<< HEAD
import { EntradaComponent } from './components/entrada/entrada.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
=======
import { DiagnosticoServicesComponent } from './components/diagnostico-services/diagnostico-services.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuClientesComponent } from './components/menu-clientes/menu-clientes.component';
import { MenuUsuariosComponent } from './components/menu-usuarios/menu-usuarios.component';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { NewDispositivoComponent } from './components/new-dispositivo/new-dispositivo.component';
import { NewEmpleadoComponent } from './components/new-empleado/new-empleado.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
>>>>>>> ramaMac
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'Login', component:LoginComponent},
  { path: 'AcercaDe', component:AcercaDeComponent },
  { path: 'MainMenu', component:MainMenuComponent, canActivate:[AuthGuard]},
  { path: 'Entry', component:EntradaComponent, canActivate:[AuthGuard]},
<<<<<<< HEAD
=======
  { path: 'QrCode', component:QrcodeComponent, canActivate:[AuthGuard]},
  { path: 'NewCliente', component:NewClienteComponent, canActivate:[AuthGuard]},
  { path: 'NewDispositivo', component:NewDispositivoComponent, canActivate:[AuthGuard]},
  { path: 'MenuUsers', component:MenuUsuariosComponent, canActivate:[AuthGuard]},
  { path: 'MenuClientes', component:MenuClientesComponent, canActivate:[AuthGuard]},
  { path: 'NewEmpleado', component:NewEmpleadoComponent, canActivate:[AuthGuard]},
  { path: 'DiagnosticServices', component:DiagnosticoServicesComponent, canActivate:[AuthGuard]},
>>>>>>> ramaMac
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

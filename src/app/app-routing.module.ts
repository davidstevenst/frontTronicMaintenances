import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AdminusersComponent } from './components/adminusers/adminusers.component';
import { ConfirmarEntregaComponent } from './components/confirmar-entrega/confirmar-entrega.component';
import { DiagnosticoServicesComponent } from './components/diagnostico-services/diagnostico-services.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { EstadoMantenimientoComponent } from './components/estado-mantenimiento/estado-mantenimiento.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuClientesComponent } from './components/menu-clientes/menu-clientes.component';
import { MenuUsuariosComponent } from './components/menu-usuarios/menu-usuarios.component';
import { MenureportesComponent } from './components/menureportes/menureportes.component';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { NewDispositivoComponent } from './components/new-dispositivo/new-dispositivo.component';
import { NewEmpleadoComponent } from './components/new-empleado/new-empleado.component';
import { NewGerenteComponent } from './components/new-gerente/new-gerente.component';
import { ProgramarEntregaComponent } from './components/programar-entrega/programar-entrega.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { CompletadosComponent } from './components/reportes/completados/completados.component';
import { EnmantenimientoComponent } from './components/reportes/enmantenimiento/enmantenimiento.component';
import { HistProcesosFechasComponent } from './components/reportes/hist-procesos-fechas/hist-procesos-fechas.component';
import { TerminadosFechasComponent } from './components/reportes/terminados-fechas/terminados-fechas.component';
import { VentasFechasComponent } from './components/reportes/ventas-fechas/ventas-fechas.component';
import { SalidaComponent } from './components/salida/salida.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'Login', component:LoginComponent},
  { path: 'AcercaDe', component:AcercaDeComponent },
  { path: 'MainMenu', component:MainMenuComponent, canActivate:[AuthGuard]},
  { path: 'Entry', component:EntradaComponent, canActivate:[AuthGuard]},
  { path: 'QrCode', component:QrcodeComponent, canActivate:[AuthGuard]},
  { path: 'NewCliente', component:NewClienteComponent, canActivate:[AuthGuard]},
  { path: 'NewDispositivo', component:NewDispositivoComponent, canActivate:[AuthGuard]},
  { path: 'MenuUsers', component:MenuUsuariosComponent, canActivate:[AuthGuard]},
  { path: 'MenuClientes', component:MenuClientesComponent, canActivate:[AuthGuard]},
  { path: 'NewEmpleado', component:NewEmpleadoComponent, canActivate:[AuthGuard]},
  { path: 'DiagnosticServices', component:DiagnosticoServicesComponent, canActivate:[AuthGuard]},
  { path: 'NewGerente', component:NewGerenteComponent, canActivate:[AuthGuard]},
  { path: 'AdminUsuarios',component:AdminusersComponent, canActivate:[AuthGuard]},
  { path: 'EditUsers/:email',component:EditUserComponent, canActivate:[AuthGuard]},
  { path: 'Salida',component:SalidaComponent, canActivate:[AuthGuard]},
  { path: 'ProgramarEntrega', component:ProgramarEntregaComponent, canActivate:[AuthGuard]},
  { path: 'MenuReportes', component:MenureportesComponent, canActivate:[AuthGuard]},
  { path: 'EnMantenimiento', component:EnmantenimientoComponent, canActivate:[AuthGuard]},
  { path: 'Completados', component:CompletadosComponent, canActivate:[AuthGuard]},
  { path: 'HistProcesosFechas', component:HistProcesosFechasComponent, canActivate:[AuthGuard]},
  { path: 'TerminadosFechas', component:TerminadosFechasComponent, canActivate:[AuthGuard]},
  { path: 'VentasFechas', component:VentasFechasComponent, canActivate:[AuthGuard]},
  { path: 'ConfirmarEntrega', component:ConfirmarEntregaComponent, canActivate:[AuthGuard]},
  { path: 'EstadoMantenimiento/:idmantenimiento', component:EstadoMantenimientoComponent},
  { path: 'Ventas', component:VentasComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

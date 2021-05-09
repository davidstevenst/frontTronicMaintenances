import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import  {NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NewDispositivoComponent } from './components/new-dispositivo/new-dispositivo.component';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuUsuariosComponent } from './components/menu-usuarios/menu-usuarios.component';
import { MenuClientesComponent } from './components/menu-clientes/menu-clientes.component';
import { NewEmpleadoComponent } from './components/new-empleado/new-empleado.component';
import { DiagnosticoServicesComponent } from './components/diagnostico-services/diagnostico-services.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdminusersComponent } from './components/adminusers/adminusers.component';
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { environment } from 'src/environments/environment';
import { NewGerenteComponent } from './components/new-gerente/new-gerente.component';
import { SalidaComponent } from './components/salida/salida.component';
import { ProgramarEntregaComponent } from './components/programar-entrega/programar-entrega.component';
import { ConfirmarEntregaComponent } from './components/confirmar-entrega/confirmar-entrega.component';
import { EstadoMantenimientoComponent } from './components/estado-mantenimiento/estado-mantenimiento.component';
import { EstadoMantenimientoPipe } from './pipes/estado-mantenimiento.pipe';
import { VentasComponent } from './components/ventas/ventas.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MenureportesComponent } from './components/menureportes/menureportes.component';
import { EnmantenimientoComponent } from './components/reportes/enmantenimiento/enmantenimiento.component';
import { CompletadosComponent } from './components/reportes/completados/completados.component';
import { TerminadosFechasComponent } from './components/reportes/terminados-fechas/terminados-fechas.component';
import { VentasFechasComponent } from './components/reportes/ventas-fechas/ventas-fechas.component';
import { HistProcesosFechasComponent } from './components/reportes/hist-procesos-fechas/hist-procesos-fechas.component';
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AcercaDeComponent,
    FooterComponent,
    MainMenuComponent,
    EntradaComponent,
    QrcodeComponent,
    NewDispositivoComponent,
    NewClienteComponent,
    MenuUsuariosComponent,
    MenuClientesComponent,
    NewEmpleadoComponent,
    DiagnosticoServicesComponent,
    FilterPipe,
    AdminusersComponent,
    EditUserComponent,
    NewGerenteComponent,
    SalidaComponent,
    ProgramarEntregaComponent,
    ConfirmarEntregaComponent,
    EstadoMantenimientoComponent,
    EstadoMantenimientoPipe,
    VentasComponent,
    MenureportesComponent,
    EnmantenimientoComponent,
    CompletadosComponent,
    TerminadosFechasComponent,
    VentasFechasComponent,
    HistProcesosFechasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NgxQRCodeModule,
    FontAwesomeModule,
    NgxPaginationModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

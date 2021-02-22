import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'Login', component:LoginComponent},
  { path: 'AcercaDe', component:AcercaDeComponent },
  { path: 'MainMenu', component:MainMenuComponent, canActivate:[AuthGuard]},
  { path: 'Entry', component:EntradaComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

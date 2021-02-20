import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  { path: 'AcercaDe', component:AcercaDeComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private empleadosService:EmpleadosServiceService) { }

  ngOnInit(): void {
  }


  isAuth():boolean{
     if(localStorage.getItem('user')){
       return true;
     } else {
       return false;
     }
  }

  logOut(){
    this.empleadosService.logOut();
  }

}

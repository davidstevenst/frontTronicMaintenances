import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading:boolean = false;
  public correo:string = "";
  public password:string = "";

  public mensajes:string[]=[];

  constructor( private empleadosService:EmpleadosServiceService,
               private router:Router) { }

  ngOnInit(): void {
  }



  public signIn() {
    this.loading=true;
    if (this.correo== null || this.correo ==""
        || this.password ==null || this.password==""){
          this.mensajes[0] = "Verifique los campos";
          this.loading = false;
          return 
    }

    this.mensajes = [];
      
    this.empleadosService.findByEmailAndPassword(this.correo,this.password).subscribe(data => {
      
 

      localStorage.setItem("user", data.email);

      this.router.navigate(['/MainMenu']);
      this.loading = false;

    }, err => {
 
      this.mensajes.push( err.error.error) ;
      this.loading = false;
    })

  }



}

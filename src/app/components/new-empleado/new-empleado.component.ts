import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/domain/empleados';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrls: ['./new-empleado.component.css']
})
export class NewEmpleadoComponent implements OnInit {

  public mensajes:string[]=[];
  public repcontrasena:string ="";
  public empleado:Empleados= new Empleados("","","Y","","");

  constructor(private empleadosService:EmpleadosServiceService) { }
  
  ngOnInit(): void {
  }

  crearEmpleado(){
    this.mensajes=[];
    if(this.empleado.contrasena != this.repcontrasena ){
      this.mensajes.push("Las contraseñas no coinciden");
      return
    }
    if(this.empleado.contrasena.length<1){
      this.mensajes.push("Ingrese una contraseña");
      return
    }

    this.empleadosService.save(this.empleado).subscribe(data =>{
      Swal.fire(
        'Empleado creado!',
        'El empleado ha sido registrado satisfactoriamente!',
        'success'
      )
    }, err =>{
      this.mensajes.push(err.error.error)
    })



  }


}

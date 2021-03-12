import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleados } from 'src/app/domain/empleados';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public empleado:Empleados = new Empleados("","","","","");
  public email:string;
  constructor(private activatedRoute: ActivatedRoute,
              private empleadosService:EmpleadosServiceService) { }

  ngOnInit(): void {
    this.email= this.activatedRoute.snapshot.params.email;
    this.getUser(this.email);
  }


  getUser(email:string){
    this.empleadosService.findById(email).subscribe(data =>{
      this.empleado= data;
    })
  }

  updateEmpleado(){
    this.empleadosService.update(this.empleado).subscribe(data =>{
      Swal.fire(
        'Empleado Actualizado!',
        'Datos almacenados satisfactoriamente!',
        'success'
      )
    })
  }



}

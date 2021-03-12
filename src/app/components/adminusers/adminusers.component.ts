import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/domain/empleados';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  public empleados:Empleados[]=[];
  public empleadosDesactivados:Empleados[]=[];
  constructor(private empleadosService:EmpleadosServiceService) { }

  ngOnInit(): void {

    this.getEmpleados();

  }


  getEmpleados(){
    this.empleadosService.findAll().subscribe(data =>{
      let empleados:Empleados[] = data;
      let arrayDef:Empleados[]= [];
      let arrayDesactivados:Empleados[]=[];
      for (let index = 0; index < empleados.length; index++) {
        
       

        if(empleados[index].email!="sinasignar" && empleados[index].estado=="Y"){
          arrayDef.push(empleados[index]);
        }

        if(empleados[index].email!="sinasignar" && empleados[index].estado=="N"){
          arrayDesactivados.push(empleados[index]);
        }

        

        
      
    
      }
      this.empleadosDesactivados=arrayDesactivados;
      this.empleados=arrayDef;
    })

  }


  desactivarEmpleado(emp: Empleados){
    emp.estado="N";
    this.empleadosService.update(emp).subscribe(data =>{
      Swal.fire(
        'Empleado desactivado!',
        'Desactivado satisfactoriamente!',
        'success'
      )
      this.getEmpleados();
    }, err =>{
      console.log(err.error.error);
    })

  }

  activarEmpleado(emp: Empleados){
    emp.estado="Y";
    this.empleadosService.update(emp).subscribe(data =>{
      Swal.fire(
        'Empleado activado!',
        'Desactivado satisfactoriamente!',
        'success'
      )
      this.getEmpleados();
    }, err =>{
      console.log(err.error.error);
    })

  }



}

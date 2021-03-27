import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/domain/empleados';
import { Gerentes } from 'src/app/domain/gerentes';
import { EmpleadosServiceService } from 'src/app/services/empleados-service.service';
import { GerentesService } from 'src/app/services/gerentes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-gerente',
  templateUrl: './new-gerente.component.html',
  styleUrls: ['./new-gerente.component.css']
})
export class NewGerenteComponent implements OnInit {

  public empleado:Empleados[]=[];
  public gerentes:Gerentes[]=[];
  public gerente:Gerentes= new Gerentes(0,"");
  constructor(private gerentesService:GerentesService,
              private empleadosService:EmpleadosServiceService) { }

  ngOnInit(): void {

    this.getEmpleados();
    this.getGerentes();

  }


  getEmpleados(){
    this.empleadosService.findAll().subscribe(data =>{
      this.empleado=data;
    })
  }

  getGerentes(){
    this.gerentesService.findAll().subscribe(data =>{
      this.gerentes=data;
    })
  }


  saveGerente(empleado:Empleados){
    this.gerente.email_Empleados=empleado.email;

    this.gerentesService.save(this.gerente).subscribe(data =>{

      Swal.fire(
        'Good job!',
        'Gerente creado!',
        'success'
      )
      this.getGerentes();
    }, err =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.error
      })
    })
  }


  deleteGerente(gerente:Gerentes){
    this.gerentesService.deleteGerente(gerente.idemp).subscribe(data =>{
      Swal.fire(
        'Good job!',
        'Gerente eliminado!',
        'success'
      )
      this.getGerentes();
    })
  }

}

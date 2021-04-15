import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-programar-entrega',
  templateUrl: './programar-entrega.component.html',
  styleUrls: ['./programar-entrega.component.css']
})
export class ProgramarEntregaComponent implements OnInit {

  public mantenimientos:Mantenimientos[] = [];

  constructor(private mantenimientosService:MantenimientosService) { }

  ngOnInit(): void {
    
    this.getTerminados();
  
  }


  public getTerminados(){

    this.mantenimientosService.getTerminados().subscribe(data => {
      this.mantenimientos = data;
    })

  }

  async update(mantenimiento:Mantenimientos){
    mantenimiento.estado='PE';
    mantenimiento.email_Empleadosprogramado=localStorage.getItem('user');
    mantenimiento.fechaProgramado = new Date();
    await this.mantenimientosService.update(mantenimiento).subscribe(data =>{
      Swal.fire(
        'Mantenimiento programado!',
        'Programado a entregar!',
        'success'
      )
      this.getTerminados();

    }, err =>{
      console.log(err.error.error)
    })

  }


}

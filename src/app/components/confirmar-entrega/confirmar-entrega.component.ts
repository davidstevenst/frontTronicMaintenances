import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-confirmar-entrega',
  templateUrl: './confirmar-entrega.component.html',
  styleUrls: ['./confirmar-entrega.component.css']
})
export class ConfirmarEntregaComponent implements OnInit {

  public mantenimientos:Mantenimientos[] =[];

  constructor(private mantenimientosService:MantenimientosService) { }

  ngOnInit(): void {
    this.getProgramados();
  }

  async update(mantenimiento:Mantenimientos){
    mantenimiento.estado='TE';
    mantenimiento.email_Empleadosentreado=localStorage.getItem('user');
    mantenimiento.fechaEntregado=new Date(); 
    await this.mantenimientosService.update(mantenimiento).subscribe(data =>{
      Swal.fire(
        'Dispositivo entregado!',
        'Programado a entregar!',
        'success'
      )
     this.getProgramados();

    }, err =>{
      console.log(err.error.error)
    })
  }

  public getProgramados(){
    this.mantenimientosService.getProgramados().subscribe(data =>{
      this.mantenimientos= data;
    })
  }


}

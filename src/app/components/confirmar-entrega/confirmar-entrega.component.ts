import { Component, OnInit } from '@angular/core';
import { Dispositivos } from 'src/app/domain/dispositivos';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { MailsenderService } from 'src/app/services/mailsender.service';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-confirmar-entrega',
  templateUrl: './confirmar-entrega.component.html',
  styleUrls: ['./confirmar-entrega.component.css']
})
export class ConfirmarEntregaComponent implements OnInit {

  public mantenimientos:Mantenimientos[] =[];
  public dispositivo:Dispositivos=null;
  constructor(private mantenimientosService:MantenimientosService,
    private dispositivosService:DispositivosService,
    private mailService:MailsenderService) { }

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

      this.dispositivosService.findById(mantenimiento.codigo_Dispositivos).subscribe(data =>{
        this.dispositivo = data;
        console.log(this.dispositivo)
        this.mailService.mailprogramadoSend(this.dispositivo.emailCliente,'El dispositivo ha sido entregado','Proceso de mantenimiento: Entregado').subscribe(data =>{

        })
      })
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

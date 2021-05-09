import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Dispositivos } from 'src/app/domain/dispositivos';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { MailsenderService } from 'src/app/services/mailsender.service';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-programar-entrega',
  templateUrl: './programar-entrega.component.html',
  styleUrls: ['./programar-entrega.component.css']
})
export class ProgramarEntregaComponent implements OnInit {

  public mantenimientos:Mantenimientos[] = [];
  public dispositivo:Dispositivos=null;
  
  constructor(private mantenimientosService:MantenimientosService,
              private mailService:MailsenderService,
              private dispositivosService:DispositivosService) { }

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
        
        this.dispositivosService.findById(mantenimiento.codigo_Dispositivos).subscribe(data =>{
          this.dispositivo = data;
          console.log(this.dispositivo)
          this.mailService.mailprogramadoSend(this.dispositivo.emailCliente,'El dispositivo esta programado para entrega','Proceso de mantenimiento: Programado').subscribe(data =>{

          })
        })
     

       


        

      this.getTerminados();

    }, err =>{
      console.log(err.error.error)
    })

  }


}

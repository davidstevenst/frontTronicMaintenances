import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  public mensajes:string[]=[];
  public qrCode:string="";
  public mantenimiento:Mantenimientos= new Mantenimientos("","P",null, new Date(),null
                                                          , null,null, 0, "N", "N", "",
                                                          "sinasignar", "sinasignar", "sinasignar", "sinasignar", "sinasignar");

  constructor( private mantenimientosService:MantenimientosService,
               private dispositivosService:DispositivosService) { }

  ngOnInit(): void {

  }



  registrarEntrada(){

    this.mensajes=[];


    this.mantenimiento.email_Empleadosentrada= localStorage.getItem("user");
    this.mantenimiento.codigo_Dispositivos=this.qrCode;
    this.mantenimientosService.entry(this.mantenimiento).subscribe(data =>{
      let mantenimiento:Mantenimientos= data;
      
      Swal.fire(
        'Good job!',
        'Mantenimiento comenzado!',
        'success'
      )
/*http://localhost:4200/EstadoMantenimiento/
*/
      this.dispositivosService.findById(mantenimiento.codigo_Dispositivos).subscribe(data =>{
        console.log(data)
        console.log(data.emailCliente)
        this.mantenimientosService.mailentrySend(data.emailCliente,
          ""+mantenimiento.idmantenimiento,
          "Mantenimiento Comenzado")
          .subscribe(data =>{
        })

      })

     

    }, err =>{
      this.mensajes[0] = err.error.error;
    })


  }




}

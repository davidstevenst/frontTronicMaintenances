import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  public qrCode:string="";
  public mensajes:string[]=[];
  constructor(private dispositivosService:DispositivosService,
              private mantenimientosService:MantenimientosService) { }

  ngOnInit(): void {

    

  }


  public getDispositivo(){
    this.mensajes=[];

    if(this.qrCode==null || this.qrCode==""){
      this.mensajes.push("qr vacio");
      return
    }

    this.dispositivosService.findById(this.qrCode).subscribe(data => {

      
      this.mantenimientosService.getMantenimientoP(this.qrCode).subscribe(data =>{

     
        if(data.fechaEntrada==null || data.fechaDiagnostico==null){
          this.mensajes.push("El mantenimiento no ha pasado por diagnostico o entrada");
          return
        }         



        let mantenimiento:Mantenimientos=data;
        mantenimiento.email_Empleadosterminado= localStorage.getItem("user");
        mantenimiento.estado="T";
        mantenimiento.fechaTerminado=new Date();





        Swal.fire({
          title: 'Visita de mantenimiento',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Yes`,
          denyButtonText: `No`,
          customClass: {
            confirmButton: 'order-2',
            denyButton: 'order-3',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            //aqui se valida que si
            mantenimiento.visita="Y";
            this.updateMantenimiento(mantenimiento)
          } else if (result.isDenied) {
            //aqui se valida que no
            mantenimiento.visita="N"
            this.updateMantenimiento(mantenimiento)
          }
        })


        
      }, err =>{
        this.mensajes.push("Verifique si el dispositivo ya terminó mantenimiento o no está en mantenimiento");

      })
    }, err =>{
      this.mensajes.push("Verifique que el dispositivo ya esté en mantenimiento");
    })
  }

  public updateMantenimiento(mantenimiento:Mantenimientos){
    this.mantenimientosService.update(mantenimiento).subscribe(data =>{
      Swal.fire(
        'Mantenimiento finalizado',
        'Procede a hacer pasos de entrega!',
        'success'
      )
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { Dispositivos } from 'src/app/domain/dispositivos';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { ServiciosEnMantenimientos } from 'src/app/domain/servicios-en-mantenimientos';
import { TiposServicios } from 'src/app/domain/tipos-servicios';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { MailsenderService } from 'src/app/services/mailsender.service';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import { ServiciosenMantenimientosService } from 'src/app/services/serviciosen-mantenimientos.service';
import { TiposServiciosService } from 'src/app/services/tipos-servicios.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-diagnostico-services',
  templateUrl: './diagnostico-services.component.html',
  styleUrls: ['./diagnostico-services.component.css']
})
export class DiagnosticoServicesComponent implements OnInit {


  public filterPipe = '';
  public tiposServicios:TiposServicios[]=[];
  public qrCode:string = "";
  public diagnostico:string = "";
  public dispositivo:Dispositivos;
  public mensajes:string[]=[];
  public mensajesSuccess:boolean=false;
  public mantenimiento:Mantenimientos;
  public serviciosEnMantenimientos:ServiciosEnMantenimientos[]=[];

  public servicioEnMantenimiento = new ServiciosEnMantenimientos(new Date(),0, 0,0);


  //pagination
  p: number = 1;

  constructor(private mantenimientosService:MantenimientosService,
              private dipositivosService:DispositivosService,
              private tiposServiciosService:TiposServiciosService,
              private serviciosEnMantenimientosService:ServiciosenMantenimientosService,
              private mailsender:MailsenderService) { }

  ngOnInit(): void {

    this.findAllTiposServicios();
  }


  findDispositivo(){
    this.mensajesSuccess=false;
    this.mensajes=[];
    if(this.qrCode.length<=0){
      this.mensajes.push("Revise los campos")
      return
    }

    this.dipositivosService.findById(this.qrCode).subscribe(data => {
      this.dispositivo=data;
      this.mensajesSuccess=true;

      this.mantenimientosService.getMantenimientoP(this.qrCode).subscribe(data => {
        this.mantenimiento =data;
        this.diagnostico=data.diagnostico;
        this.findServicios();
      }, err =>{
        this.mensajes.push(err.error.error)
      })  
    }, err =>{
      this.mensajes.push(err.error.error)
    })


    
    
  }

  
  saveDiagnostico(){

    this.mensajes=[];
    
    if(this.diagnostico.length<1){
      this.mensajes.push("El diagnostico no puede estar vacio");
      return
    }
    if(this.qrCode.length<1){
      this.mensajes.push("El qr no puede estar vacío");
      return
    }
  

    this.mantenimiento.email_Empleadosdiagnostico=localStorage.getItem("user");
    this.mantenimiento.fechaDiagnostico=new Date();
    this.mantenimiento.diagnostico=this.diagnostico;
    this.mantenimientosService.update(this.mantenimiento).subscribe(data =>{

      Swal.fire(
        'Diagnostico guardado!',
        'El diagnostico ha sido registrado!',
        'success'
      )
      this.mailsender.maildiagnosticoSend(this.dispositivo.emailCliente,"El diagnostico de su dispositivo se ha actualizado: "+this.mantenimiento.diagnostico,"Actualizacion de diagnostico").subscribe(data => {
        
      })
    }, err =>{
      this.mensajes.push(err.error.error);
    });

  }


  findAllTiposServicios(){

    this.tiposServiciosService.findAll().subscribe(data =>{
      
      this.tiposServicios = data;
    }, err =>{
      console.log(err)
    });

  }

  addServicio(idServicio:number){

    this.mensajes=[];

    if(this.qrCode.length<1){
      this.mensajes.push("No existe mantenimiento para el dispositivo o no existe el qr");
      return
    }

    this.servicioEnMantenimiento.idmantenimiento_Mantenimientos=this.mantenimiento.idmantenimiento;
    this.servicioEnMantenimiento.idtipo_TiposServicios=idServicio
    

    this.serviciosEnMantenimientosService.save(this.servicioEnMantenimiento).subscribe(data =>{
      Swal.fire(
        'Servicio incluido!',
        'El servicio se ha registrado!',
        'success'
      )
      this.findServicios();
    }, err=>{
      this.mensajes.push(err.error.error)
    })


  }


  findServicios(){
     this.serviciosEnMantenimientosService.findServiciosByMantenimientos(this.mantenimiento.idmantenimiento).subscribe(data =>{
      this.serviciosEnMantenimientos=data;
      
     
      console.log(data)

    }, err =>{
      console.log(err)
    })

    
  }


}

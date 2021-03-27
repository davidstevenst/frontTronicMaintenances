import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
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

  constructor( private mantenimientosService:MantenimientosService) { }

  ngOnInit(): void {

  }



  registrarEntrada(){

    this.mensajes=[];


    this.mantenimiento.email_Empleadosentrada= localStorage.getItem("user");
    this.mantenimiento.codigo_Dispositivos=this.qrCode;
    this.mantenimientosService.entry(this.mantenimiento).subscribe(data =>{
      Swal.fire(
        'Good job!',
        'Mantenimiento comenzado!',
        'success'
      )
    }, err =>{
      this.mensajes[0] = err.error.error;
    })


  }




}

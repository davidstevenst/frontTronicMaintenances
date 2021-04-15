import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mantenimientos } from 'src/app/domain/mantenimientos';
import { ServiciosEnMantenimientos } from 'src/app/domain/servicios-en-mantenimientos';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import { ServiciosenMantenimientosService } from 'src/app/services/serviciosen-mantenimientos.service';

@Component({
  selector: 'app-estado-mantenimiento',
  templateUrl: './estado-mantenimiento.component.html',
  styleUrls: ['./estado-mantenimiento.component.css']
})
export class EstadoMantenimientoComponent implements OnInit {
  public idmantenimiento=0;
  public mantenimiento:Mantenimientos=null;
  public porcentajecompletado:string="";
  public serviciosEnMantenimientos:ServiciosEnMantenimientos[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private mantenimientosService:MantenimientosService,
              private serviciosEnMantenimientosService:ServiciosenMantenimientosService) { }

  ngOnInit(): void {

    this.idmantenimiento= this.activatedRoute.snapshot.params.idmantenimiento;
    this.findMantenimiento(this.idmantenimiento);
  }

  findMantenimiento(idmantenimiento:number){
    this.mantenimientosService.findById(idmantenimiento).subscribe(data => {
      console.log(data)
      this.mantenimiento = data;
      this.findServicios();

      if(data.estado == "P"){
        this.porcentajecompletado="25%";
      }
  
      if(data.estado == "T"){
        this.porcentajecompletado="50%";

      }
  
      if(data.estado == "PE"){
        this.porcentajecompletado="75%";

      }
  
      if(data.estado == "TE"){
        this.porcentajecompletado="100%";

      }

      
    }, err =>{
      console.log(err.error.error)
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

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoMantenimiento'
})
export class EstadoMantenimientoPipe implements PipeTransform {

  transform(estado: string): any {
    let salida:string="";
    if(estado == "P"){
      salida = "En Mantenimiento";
    }

    if(estado == "T"){
      salida =  "En Salida de Mantenimiento";
    }

    if(estado == "PE"){
      salida =  "Programado para entregar";
    }

    if(estado == "TE"){
      salida =  "Entregado";
    }
    return salida;
    
  }

}

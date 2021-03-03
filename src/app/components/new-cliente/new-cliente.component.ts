import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/domain/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  public mensajes:string[]=[];
  public cliente:Clientes = new Clientes("","Y",0,"");

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
  }


  public save(){
    this.mensajes = [];

    if(this.cliente.correo== null || this.cliente.correo == ""
      || this.cliente.nombre == null || this.cliente.nombre == ""){
        this.mensajes[0]= "Verifique los campos"
        return
      }

    this.clientesService.save(this.cliente).subscribe(data =>{
      Swal.fire(
        'Cliente registrado!',
        'Recuerda asignar un dispositivo!',
        'success'
      )
    }, err =>{
      console.log(err.error.error)
    })
  }



}

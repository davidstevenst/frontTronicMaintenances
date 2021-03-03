import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { Clientes } from 'src/app/domain/clientes';
import { Dispositivos } from 'src/app/domain/dispositivos';
import { TiposDispositivos } from 'src/app/domain/tipos-dispositivos';
import { ClientesService } from 'src/app/services/clientes.service';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { TiposDispositivosService } from 'src/app/services/tipos-dispositivos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-dispositivo',
  templateUrl: './new-dispositivo.component.html',
  styleUrls: ['./new-dispositivo.component.css']
})
export class NewDispositivoComponent implements OnInit {
  
  loadingQr:boolean = false;
  /*qr setting*/
  title = 'qrQode';
  name= 'Angular'+VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';

  public filterPipe = '';
  public dispositivo:Dispositivos= new Dispositivos("","","","",null,null);
  public tiposDispositivos:TiposDispositivos[]=[];
  public clientes:Clientes[]=[];
  public mensajes:string[]=[];
  public correoSeleccionado:string="";

   //pagination
   p: number = 1;

  constructor(private dispositivosService:DispositivosService,
              private tiposDispositivosService:TiposDispositivosService,
              private clientesService:ClientesService) { }

  ngOnInit(): void {

    this.createQr();
    this.findTipoDispositivo();
    this.findAllCustomers();
  }

  createQr(){
    this.loadingQr=true;
    this.dispositivosService.count().subscribe(data =>{
      let qrValue= this.pad(data, 10)+"TMQR";
      this.value =  qrValue;
      this.dispositivo.codigo=qrValue;
      this.loadingQr=false;
    }, err =>{
      console.log(err)
      this.loadingQr=false;
    })
  }

  pad(num:number, size:number): string {
    let s = (num+1)+"";
    while (s.length < size) s = "0" + s;

    return s;
  }


  findTipoDispositivo(){
    this.tiposDispositivosService.findAll().subscribe(data =>{
      this.tiposDispositivos = data;
    })
  }

  findAllCustomers(){
    this.clientesService.findAll().subscribe(data =>{
      this.clientes = data;
    })
  }

  selectCustomer(idCustomer:number,email:string){
    this.dispositivo.idclie_Clientes=idCustomer;
    this.correoSeleccionado=email;
  }

  save(){
    this.mensajes=[];
    
    if(this.dispositivo.direccion == null || this.dispositivo.direccion == "" ||
      this.dispositivo.especificaciones == null || this.dispositivo.especificaciones=="" ||
      this.dispositivo.idtipodis_TiposDispositivos == null || this.dispositivo.idtipodis_TiposDispositivos == 0 || 
      this.dispositivo.idclie_Clientes == null || this.dispositivo.idclie_Clientes == 0){
        this.mensajes[0]="valide los campos";
        return
    }


    this.dispositivosService.save(this.dispositivo).subscribe(data =>{
      Swal.fire(
        'Dispositivo creado!',
        'Recuerda usar el codigoQR!',
        'success'
      )
    }, err =>{
      this.mensajes=err.error.error;
      console.log(err)
    })
  }


}

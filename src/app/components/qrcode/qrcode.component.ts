import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { version } from 'process';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  /*qr setting*/
  title = 'qrQode';
  name= 'Angular'+VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';

  constructor(private dispositivosService:DispositivosService) { }

  ngOnInit(): void {
    this.crearNuevoValor();
  }

  crearNuevoValor(){
    this.dispositivosService.count().subscribe(data =>{
      let qrValue= this.pad(data, 10)+"TMQR";
      this.value =  qrValue;
    }, err =>{
      console.log(err)
    })
  }

  pad(num:number, size:number): string {
    let s = (num+1)+"";
    while (s.length < size) s = "0" + s;

    return s;
}

}

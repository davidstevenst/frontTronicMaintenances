import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-ventas-fechas',
  templateUrl: './ventas-fechas.component.html',
  styleUrls: ['./ventas-fechas.component.css']
})
export class VentasFechasComponent implements OnInit {

  public fechaini:Date = null;
  public fechafin:Date = null;

  constructor(
    private reportsService:ReportService
  ) { }

  ngOnInit(): void {
  }

  generarReport(){
    this.reportsService.ventasFechas(this.fechaini, this.fechafin).subscribe(data =>{
      const blob = new Blob([data], {type: 'aplication/pdf'});

      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }

      const dat = window.URL.createObjectURL(blob);
      const link =document.createElement("a");
      link.href = dat;
      link.download = 'VentasFechas.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))
      
      setTimeout(function()  {
        window.URL.revokeObjectURL(dat);
        link.remove();
      }, 1000);
      
    
    },err =>{
      console.log(err.error.error)
    })

  }

}

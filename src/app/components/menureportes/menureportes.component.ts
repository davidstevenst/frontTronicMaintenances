import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper,Img,Txt,Table } from 'pdfmake-wrapper';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-menureportes',
  templateUrl: './menureportes.component.html',
  styleUrls: ['./menureportes.component.css']
})
export class MenureportesComponent implements OnInit {


  public mantenimientos:MantenimientosService= null;
  constructor(private mantenimientosService:MantenimientosService,
              private reportsService:ReportService) { }

  ngOnInit( ): void {
  }


  reporteEnMantenimiento(){
    this.reportsService.enMantenimiento().subscribe(data =>{
      const blob = new Blob([data], {type: 'aplication/pdf'});

      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }

      const dat = window.URL.createObjectURL(blob);
      const link =document.createElement("a");
      link.href = dat;
      link.download = 'EnMantenimiento.pdf';
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

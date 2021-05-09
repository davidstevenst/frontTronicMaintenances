import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mantenimientos } from '../domain/mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  private url:string = environment.apiUrl+"api/v1/mantenimientos"
  private urlmailsend:string = environment.apiUrl+"api/v1/mailSender"

  constructor(private httpClient:HttpClient) { }
 
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  mailentrySend(to:string, body:string, topic:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.urlmailsend+"/sendEntry/"+to+"/"+body+"/"+topic,{headers:headers});

  }

  entry(mantenimiento:Mantenimientos):Observable<any>{
    let headers=this.createTokenHeader();

    return this.httpClient.post(this.url+"/entry", mantenimiento, {headers:headers});
  }


  getMantenimientoP(qrCode:string):Observable<any>{
    let headers=this.createTokenHeader();

    return this.httpClient.get(this.url+"/getMantenimientoP/"+qrCode,  {headers:headers});
  }


  update(mantenimiento:Mantenimientos):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.put(this.url, mantenimiento ,{headers:headers});
  }

  getTerminados():Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.get(this.url+"/getTerminados",{headers:headers});
    
  }

  getProgramados():Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.get(this.url+"/getProgramados",{headers:headers});
    
  }

  findById(idmantenimiento:number):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.get(this.url+"/"+idmantenimiento,{headers:headers});
    
  }

  getReporteEnMantenimiento():Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/getReporteEnMantenimiento",{headers:headers});
    
  }

  getReporteCompletados():Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/getReporteCompletados",{headers:headers});
    
  }

  getTerminadosEnFechas(fechaini:Date,fechafin:Date):Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/getTerminadosEnFechas/"+fechaini+"/"+fechafin,{headers:headers});
    
  }

  getHistProcesosFechas(fechaini:Date,fechafin:Date):Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/getHistProcesosFechas/"+fechaini+"/"+fechafin,{headers:headers});
    
  }


}

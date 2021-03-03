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

  constructor(private httpClient:HttpClient) { }
 
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
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

}

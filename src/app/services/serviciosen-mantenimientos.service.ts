import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiciosEnMantenimientos } from '../domain/servicios-en-mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosenMantenimientosService {

  private url:string = environment.apiUrl+"api/v1/serviciosEnMantenimientos"

  constructor(private httpClient:HttpClient) { }
 
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }


  save(serviciosEnMantenimientos:ServiciosEnMantenimientos):Observable<any>{
    let headers= this.createTokenHeader();

    return this.httpClient.post(this.url,serviciosEnMantenimientos,{headers:headers});
  }

  findServiciosByMantenimientos(idmantenimiento:number):Observable<any>{
    let headers= this.createTokenHeader();

    return this.httpClient.get(this.url+"/serviciosEnMantenimiento/"+idmantenimiento,{headers:headers})

  }


  





}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dispositivos } from '../domain/dispositivos';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {
  
  private url:string = environment.apiUrl+"api/v1/dispositivos"


  constructor(private httpClient:HttpClient) { }


  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  count():Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/count" ,{headers:headers})

  }

  save(dispositivo:Dispositivos):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url+"/" ,dispositivo,{headers:headers})
  }

  findById(qrCode:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/"+qrCode,{headers:headers});
  }



}

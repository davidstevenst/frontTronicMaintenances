import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiposServiciosService {

  private url:string = environment.apiUrl+"api/v1/tiposServicios"

  constructor(private httpClient:HttpClient) { }


  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }


  findAll():Observable<any>{
    let headers=this.createTokenHeader();
    
    return this.httpClient.get(this.url, {headers:headers});

  }

  findById(idServicio:number):Observable<any>{
    let headers=this.createTokenHeader();
    
    return this.httpClient.get(this.url+"/"+idServicio, {headers:headers});

  }



}

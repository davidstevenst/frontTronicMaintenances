import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from '../domain/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url:string = environment.apiUrl+"api/v1/clientes"

  constructor(private httpClient:HttpClient) { }
 



  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  
  findAll():Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/", {headers:headers});
  }

  save(cliente: Clientes):Observable<any>{
    
    let headers=this.createTokenHeader();
    
    return this.httpClient.post(this.url+"/", cliente, {headers:headers});

  }


}

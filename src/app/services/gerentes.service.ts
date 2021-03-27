import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gerentes } from '../domain/gerentes';

@Injectable({
  providedIn: 'root'
})
export class GerentesService {
  private url:string = environment.apiUrl+"api/v1/gerentes"


  constructor(private httpClient:HttpClient,
    private router:Router) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');

    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  findAll():Observable<any>{
    let headers= this.createTokenHeader();
    return this.httpClient.get(this.url, {headers:headers})
  }

  save(gerentes:Gerentes):Observable<any>{
    let headers= this.createTokenHeader();
    return this.httpClient.post(this.url,gerentes ,{headers:headers})
  }

  deleteGerente(idGen:number):Observable<any>{
    let headers= this.createTokenHeader();
    return this.httpClient.delete(this.url+"/"+idGen ,{headers:headers})


  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url:string = environment.apiUrl+"api/v1/reports";

  constructor(private httpClient:HttpClient) { }  

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }


  enMantenimiento():Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/reportEnMantenimiento",
          {headers:headers,
          responseType:'blob'
          }
          );

  }
}

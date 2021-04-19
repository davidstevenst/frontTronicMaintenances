import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailsenderService {

  private urlmailsend:string = environment.apiUrl+"api/v1/mailSender";

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

  maildiagnosticoSend(to:string, body:string, topic:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.urlmailsend+"/sendDiagnostico/"+to+"/"+body+"/"+topic,{headers:headers});

  }

  mailterminadoSend(to:string, body:string, topic:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.urlmailsend+"/sendTerminado/"+to+"/"+body+"/"+topic,{headers:headers});

  }

  mailprogramadoSend(to:string, body:string, topic:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.urlmailsend+"/sendProgramado/"+to+"/"+body+"/"+topic,{headers:headers});

  }
  mailentregadoSend(to:string, body:string, topic:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.urlmailsend+"/sendEntregado/"+to+"/"+body+"/"+topic,{headers:headers});

  }

}

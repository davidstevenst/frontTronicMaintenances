import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {
  private url:string = environment.apiUrl+"api/v1/empleados"


  constructor(private httpClient:HttpClient,
              private router:Router) { }
  
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
   
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  findByEmailAndPassword(email:string,password:string):Observable<any>{
   
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+"/signIn/"+email+"/"+password ,{headers:headers})
  }


  logOut(){
    
    localStorage.removeItem('user');
    
    this.router.navigate(['/Login']);

  }

}

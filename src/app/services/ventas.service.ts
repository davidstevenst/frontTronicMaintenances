import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductosEnVentas } from '../domain/productos-en-ventas';
import { Ventas } from '../domain/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url:string = environment.apiUrl+"api/v1/ventas"
  private urlpev:string = environment.apiUrl+"api/v1/productosEnVentas"

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

  findById(idventa:number):Observable<any>{
    let headers=this.createTokenHeader();
    
    return this.httpClient.get(this.url+"/"+idventa, {headers:headers});

  }

  deleteById(idventa:number):Observable<any>{
    let headers=this.createTokenHeader();

    return this.httpClient.delete(this.url+"/"+idventa, {headers:headers});

  }


  save(venta: Ventas):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.post(this.url,venta, {headers:headers});

  }

  findByCliente(idcliente: number):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.get(this.url+"/findByCliente/"+idcliente, {headers:headers});

  }


  saveProductosEnVentas(pev: ProductosEnVentas):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.post(this.urlpev,pev, {headers:headers});

  }
  


  getProductosEnVentas(idVenta: number):Observable<any>{

    let headers=this.createTokenHeader();

    return this.httpClient.get(this.urlpev+"/findByVenta/"+idVenta, {headers:headers});

  }


  deleteProductosEnVentas(idproenventa:number):Observable<any>{
    let headers=this.createTokenHeader();

    return this.httpClient.delete(this.urlpev+"/"+idproenventa, {headers:headers});
  }

  update(ventas:Ventas):Observable<any>{
    let headers=this.createTokenHeader();

    return this.httpClient.put(this.url,ventas, {headers:headers});
  }
}

import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/domain/clientes';
import { ProductosEnVentas } from 'src/app/domain/productos-en-ventas';
import { TiposDispositivos } from 'src/app/domain/tipos-dispositivos';
import { Ventas } from 'src/app/domain/ventas';
import { ClientesService } from 'src/app/services/clientes.service';
import { TiposDispositivosService } from 'src/app/services/tipos-dispositivos.service';
import { VentasService } from 'src/app/services/ventas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  idcliente:number=0;
  clienteSelect:Clientes=null;
  public ventas:Ventas = new Ventas("Y",new Date(), 0, 0);
  public tiposDispositivos:TiposDispositivos[] = []
  public clientes:Clientes[] = []
  public ventaGet:Ventas = new Ventas("Y",new Date(), 0, 0);
  public productosEnVentas = new ProductosEnVentas(0,0,"",0,0,0);
  public productosEnLaVenta:ProductosEnVentas[] =[];

  constructor(private clientesService:ClientesService,
              private tiposDispositivosService:TiposDispositivosService,
              private ventasService:VentasService) { }

  ngOnInit(): void {

    this.getClientes();
    this.getTiposDispositivos();
  }



  getClientes(){

    this.clientesService.findAll().subscribe(data =>{
      this.clientes = data;
    })

  }

  getTiposDispositivos(){
    this.tiposDispositivosService.findAll().subscribe(data => {
      this.tiposDispositivos = data;
    })
  }

 

  saveVenta(cliente:Clientes){

    this.ventas.idclie_Clientes=cliente.idclie;
    this.clienteSelect=cliente;
   
    this.ventasService.save(this.ventas).subscribe(data => {
      
 
      Swal.fire(
        'Good job!',
        'Venta creada!',
        'success'
      )

      this.ventasService.findByCliente(cliente.idclie).subscribe(data =>{
        this.ventaGet = data;
        this.productosEnVentas.idventa_Ventas = this.ventaGet.idventa;
        this.ventasService.getProductosEnVentas(this.ventaGet.idventa).subscribe(data =>{
          this.productosEnLaVenta = data;
          
        }, err =>{
         
        })
      })

    }, err =>{
     
 
      
      //this.getVenta(idcliente)
      this.ventasService.findByCliente(cliente.idclie).subscribe(data =>{
      
        this.ventaGet = data;
        this.productosEnVentas.idventa_Ventas = this.ventaGet.idventa;
        
        this.ventasService.getProductosEnVentas(this.ventaGet.idventa).subscribe(data =>{
          this.productosEnLaVenta = data;
        }, err =>{
          console.log(err)
        })
      })

    })

    

  }

  getVenta(idCliente:number){

    this.ventasService.findByCliente(this.idcliente).subscribe(data =>{
      
      this.ventaGet = data;
      this.productosEnVentas.idventa_Ventas = this.ventaGet.idventa;
      
      this.ventasService.getProductosEnVentas(this.ventaGet.idventa).subscribe(data =>{
        this.productosEnLaVenta = data;
      }, err =>{
        console.log(err)
      })
    })

  }

  saveProductosEnVentas(){

    if (this.productosEnVentas.idtipodis_TiposDispositivos == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seleccione el producto'
      })

      return ;
    }

    this.ventasService.saveProductosEnVentas(this.productosEnVentas).subscribe(data =>{
      Swal.fire(
        'Good job!',
        'Producto Agregado!',
        'success'
      )
      this.ventasService.getProductosEnVentas(this.ventaGet.idventa).subscribe(data =>{
        this.productosEnLaVenta = data;
      }, err =>{
        console.log(err)
      })
    
    })
  }

  getProductosEnVentas(idVenta:number){
    this.ventasService.getProductosEnVentas(idVenta).subscribe(data =>{
      this.productosEnLaVenta = data;
    }, err =>{
      console.log(err)
    })
  }


  deleteProduct(pev:ProductosEnVentas){
    this.ventasService.deleteProductosEnVentas(pev.idproven).subscribe(data =>{
      this.getProductosEnVentas(pev.idventa_Ventas);
    })
  }

  update(){
    this.ventaGet.estado="T";
    this.ventasService.update(this.ventaGet).subscribe(data =>{
      this.getClientes();
      this.getTiposDispositivos();
      Swal.fire(
        'Good job!',
        'Venta Terminada!',
        'success'
      )
    })

  }

}

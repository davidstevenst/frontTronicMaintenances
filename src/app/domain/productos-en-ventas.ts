export class ProductosEnVentas {

    constructor(
        public idproven:number,
        public precio:number,
        public serial:string,
        public idtipodis_TiposDispositivos:number,
        public idventa_Ventas:number,
        public cantidad:number,
        public tipodis?:string
        
    ){}

}

export class ServiciosEnMantenimientos {

    constructor(
        public fechaservicio:Date,
        public idser:number,
        public idmantenimiento_Mantenimientos:number,
        public idtipo_TiposServicios:number,
        public nombreServicio?:string
    ){}

}

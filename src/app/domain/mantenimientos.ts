export class Mantenimientos {

    constructor(
        public diagnostico:string,
        public estado:string,
        public fechaDiagnostico:Date,
        public fechaEntrada:Date,
        public fechaEntregado:Date,
        public fechaProgramado:Date,
        public fechaTerminado:Date, 
        public idmantenimiento:number,
        public pagado:string,
        public visita:string,
        public codigo_Dispositivos:string,
        public email_Empleadosentrada:string,
        public email_Empleadosdiagnostico:string,
        public email_Empleadosterminado:string,
        public email_Empleadosprogramado:string,
        public email_Empleadosentreado:string,


    ){}


}

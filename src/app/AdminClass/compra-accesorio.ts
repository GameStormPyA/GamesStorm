export class CompraAccesorio {
    constructor(
        public Id_Accesorios: number,
        public Id_User: number,
        public Id_Plaforma: number,
        public Nombre_Accesorios: string,
        public Nombre_User: string,
        public Nombre_Plaforma: string,
        public Edicion: string,
        public Precio: number,
        public Cantidad: number
    ){}
}

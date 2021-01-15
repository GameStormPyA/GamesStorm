export class RelacionAccesorio {
    constructor(
        public Id_Accesorio: number,
        public Id_Plataforma: number,
        public Precio: number,
        public Edicion: string,
        public Stock: Date,
        public Nombre_Accesorio: string,
        public Nombre_Plataforma: string,
    ){}
}

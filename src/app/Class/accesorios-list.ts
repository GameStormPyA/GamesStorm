export class AccesoriosList {
    constructor(
        public Id_Accesorios: number,
        public Id_Plataforma: number,
        public Id_Categoria: number ,
        public Descripcion: string,        
        public Portada: string,
        public Precio: number,
        public Edicion: string,
        public Stock: Date,
        public Nombre_Categoria: string ,
        public Nombre_Accesorios: string,
        public Nombre_Plataforma: string,
    ){}
}

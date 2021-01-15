export class Accesorio {
    constructor(
        public Id: number,
        public Nombre: string,
        public Descripcion: string,
        public Portada: string,
        public Valoracion: number,
        public NumValoraciones: number, 
        public Id_Categoria: number ,
        public Nombre_Categoria: string 
    ){}
}

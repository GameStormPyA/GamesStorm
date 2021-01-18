export class JuegosList {
    constructor(
        public Id_Juego: number,
        public Id_Plataforma: number,
        public Id_Genero: number ,
        public Descripcion: string,        
        public Portada: string,
        public Valoracion: number,
        public NumValoraciones: number,
        public Precio: number,
        public Edicion: string,
        public Stock: Date,
        public Lanzamiento:Date,
        public Imagenes: string,
        public Video: string,
        public EdadMin: number, 
        public Nombre_Genero: string ,
        public Nombre_Juego: string,
        public Nombre_Plataforma: string,
    ){}
}
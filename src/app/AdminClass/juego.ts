export class Juego {
    constructor(
        public Id: number,
        public Nombre: string,
        public Descripcion: string,
        public Portada: string,
        public Lanzamiento: Date,
        public Valoracion: number,
        public NumValoraciones: number,
        public Imagenes: string,
        public Video: string,
        public EdadMin: number, 
        public Id_Genero: number ,
        public Nombre_Genero: string 
    ){}
}

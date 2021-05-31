export class Juego {
    constructor(
        public Id: number,
        public Nombre: string,
        public Descripcion: string,
        public Portada: string,
        public Lanzamiento: Date,
        public Video: string,
        public EdadMin: number, 
        public Id_Genero: number ,
        public Nombre_Genero: string,
        public Base64TextoPortada: string
    ){}
}

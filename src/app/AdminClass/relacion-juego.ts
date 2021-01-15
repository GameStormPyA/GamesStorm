export class RelacionJuego {
    constructor(
        public Id_Juego: number,
        public Id_Plataforma: number,
        public Precio: number,
        public Edicion: string,
        public Stock: Date,
        public Nombre_Juego: string,
        public Nombre_Plataforma: string,
    ){}
}

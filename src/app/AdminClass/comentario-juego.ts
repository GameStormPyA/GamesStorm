export class ComentarioJuego {
    constructor(
        public Id_Juego: number,
        public Id_User: number,
        public Comentario: string,
        public Nombre_Juego: string,
        public Nombre_User: string
    ){}
}

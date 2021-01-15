export class CompraJuego {
    constructor(
        public Id_Juego: number,
        public Id_User: number,
        public Id_Plaforma: number,
        public Nombre_Juego: string,
        public Nombre_User: string,
        public Nombre_Plaforma: string,
        public Edicion: string,
        public Precio: number,
        public Cantidad: number
    ){}
}

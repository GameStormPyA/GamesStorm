import { Time } from "@angular/common";

export class Subasta {
    constructor(
        public Id : number,
        public Id_Juego: number,
        public Id_Plataforma: number,
        public Id_Genero: number,
        public PrecioMin: number,
        public TiempoInicio: Date,
        public HoraInicio: Time,
        public TiempoFin: Date,
        public HoraFin: Time,
        public Nombre_Juego: string,
        public Nombre_Plataforma: string,
        public Nombre_Genero: string
    ){}
}

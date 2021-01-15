import { Time } from "@angular/common";
export class Puja {
    constructor(
        public Id_Subasta: number,
        public Id_User: number,
        public Id_Plataforma: number,
        public Puja: number,
        public Fecha: Date,
        public Hora: Time,
        public Nombre_User: string,
        public Nombre_juego:string,
        public Nombre_Plataforma:string
    ){}
}

export class Usuario {
    constructor(
        public Id : number,
        public Nombre: string,
        public Apellidos: string,
        public Contrasena: string,
        public Correo: string,
        public Edad: number,
        public Administrador: boolean
    ){}
}

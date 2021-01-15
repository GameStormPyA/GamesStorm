export class Usuario {
    constructor(
        public Id : number,
        public Nombre: string,
        public Apellidos: string,
        public Contrasena: string,
        public Cuenta: string,
        public Direccion: string,
        public Correo: string,
        public Edad: number,
        public Logo: string,
        public Administrador: boolean
    ){}
}

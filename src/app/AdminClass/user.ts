export class User {
    constructor(
        public Id: number,
        public Nombre: string,
        public Apellido: string,
        public Cuenta: string,
        public Direccion: string,
        public Correo: string,
        public Edad: number,
        public Logo: string,
        public Contrasena: string,
        public Administrador: boolean, 
    ){}
}

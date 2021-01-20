export class User {
    constructor(
        public Id: number,
        public Nombre: string,
        public Apellido: string,
        public Correo: string,
        public Edad: number,
        public Contrasena: string,
        public Administrador: boolean, 
    ){}
}

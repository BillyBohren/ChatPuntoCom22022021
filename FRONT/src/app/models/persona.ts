export class Persona {
    id?: number;
    usuario: string;
    password: string;
    nombre: string;

    constructor(usuario: string, password:string, nombre:string){
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
    }

}



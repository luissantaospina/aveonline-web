export class User {
  nombre: string;
  rol_id: number;
  login: string;

  constructor(
    nombre: string,
    rol_id: number,
    login: string
  )
  {
    this.nombre = nombre;
    this.rol_id = rol_id;
    this.login = login;
  }
}

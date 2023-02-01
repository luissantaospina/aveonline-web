export class Product {
  id: number;
  esta_activo: boolean;
  cantidad: number;
  categoria: string;
  codigo: string;
  descripcion: string;
  nombre: string;
  precio: number;

  constructor(
    id: number,
    esta_activo: boolean,
    cantidad: number,
    categoria: string,
    codigo: string,
    descripcion: string,
    nombre: string,
    precio: number
  )
  {
    this.id = id;
    this.esta_activo = esta_activo;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.nombre = nombre;
    this.precio = precio;
  }
}

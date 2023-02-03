export class Order {
  cliente_id: string;
  codigo: string;
  precio: number;

  constructor(
    cliente_id: string,
    codigo: string,
    precio: number,
  )
  {
    this.cliente_id = cliente_id;
    this.codigo = codigo;
    this.precio = precio
  }
}

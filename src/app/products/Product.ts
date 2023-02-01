export class Product {
  id: number;
  is_active: boolean;
  amount: number;
  category: string;
  code: string;
  description: string;
  name: string;
  price: number;

  constructor(
    id: number,
    is_active: boolean,
    amount: number,
    category: string,
    code: string,
    description: string,
    name: string,
    price: number
  )
  {
    this.id = id;
    this.is_active = is_active;
    this.amount = amount;
    this.category = category;
    this.code = code;
    this.description = description;
    this.name = name;
    this.price = price;
  }
}

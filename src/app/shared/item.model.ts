export class Item {
  public name: string;
  public price:number;
  public description: string;
  public imagePath: string;
  public qty: number;

  constructor(name: string, price: number, description: string, imagePath: string, qty: number) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imagePath = imagePath;
    this.qty = qty;
  }
}

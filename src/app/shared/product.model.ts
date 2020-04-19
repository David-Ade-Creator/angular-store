export class Product {
  public productId:number
  public name: string;
  public price:number;
  public description: string;
  public imagePath: string;

  constructor(productId: number, name: string, price: number, description: string, imagePath: string) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imagePath = imagePath;
  }
}

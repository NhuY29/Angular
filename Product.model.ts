export class Product{
    id: string;
    name: string;
    price: number;
    description: string;
    value: number;
    img: string;
    constructor(id: string, name: string, price: number, description: string,value:number, img: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.value = value;
        this.img = img;
    }
}
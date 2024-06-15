import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  list: Product[] = [];
  title = 'shoppingCart';
  constructor() { 
    this.list = [
      { id:"1",
        name: "PRODUCT ITEM NUMBER 2",
        price: 9.99,
        description: "Description for product item number 1",
        value: 1,
        img: "https://th.bing.com/th/id/OIP.9oGPZBPEGBIM_fUT2OZdMgAAAA?w=474&h=399&rs=1&pid=ImgDetMain"
      },
      { id:"2",
        name: "PRODUCT ITEM NUMBER 1",
        price: 5.99,
        description: "Description for product item number 2",
        value: 2,
        img: "https://th.bing.com/th/id/R.f47dc44df00429e8fae49845ebe99517?rik=mNqEgrgKTktMfQ&pid=ImgRaw&r=0"
      },
    ];
    
  }
      //......................
  getCode(getCode:string){
    if(getCode=="NhuYCute"){
      alert("Bạn đã nhập đúng mã");
      this.discount = this.subtotal*0.15;
      this.total = this.fee+this.subtotal-this.discount;
    }
    else{
      alert("Bạn đã nhập sai mã");
    }
  }
  ngOnInit(): void {
    let numberItems =0;
    let subtotal =0;
    for(let item of this.list){
      
      numberItems += item.value;
      subtotal += item.value * item.price;
    }
    this.numberItems = numberItems;
    this.subtotal = subtotal;
    this.fee = Math.round(this.subtotal * 0.1 * 100) / 100;
    this.total = parseFloat((this.fee + this.subtotal - this.discount).toFixed(2));
  }
  subtotal = 0;
  numberItems = 0;
  discount = 0;
  fee = this.subtotal*0.1;
  total = this.fee+this.subtotal; 
  removeProduct(productId: string) :void {
     const index = this.list.findIndex(item => item.id === productId);

     this.list.splice(index, 1);

     this.Update();
  }
//...............
updateProductQuantity(update: { id: string, value: number }): void {
  const product = this.list.find(item => item.id === update.id);
  if (product) {
    const oldValue = product.value;
    product.value = update.value;
    this.Update();
   
  }
}
submitForm(form: any): void {
  const newProduct:Product = {
    id: form.controls.productId.value,
    name: form.controls.productName.value,
    price: form.controls.productPrice.value,
    description: form.controls.productDescription.value,
    value: form.controls.productValue.value,
    img: form.controls.productImg.value
  }
  this.list.push(newProduct);
  this.Update();
}
Update(){
  let numberItems = 0;
  let subtotal = 0;

  for (let item of this.list) {
    numberItems += item.value;
    subtotal += item.value * item.price;
  }

  this.numberItems = numberItems;
  this.subtotal = subtotal;
  this.fee = Math.round(this.subtotal * 0.1 * 100) / 100;
  this.total = parseFloat((this.fee + this.subtotal - this.discount).toFixed(2));
  this.discount = subtotal*0.15;
}
searchProduct(search: string): void {
  const foundProducts = this.list.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (foundProducts.length > 0) {
    console.log("Đã tìm thấy sản phẩm:", foundProducts);
    this.list = foundProducts;
    this.Update();
  } 
  else if(foundProducts.length ==0){
    this.list = this.list;
    this.Update();
  }
  else {
    console.log("Không tìm thấy sản phẩm");

  }
}

}

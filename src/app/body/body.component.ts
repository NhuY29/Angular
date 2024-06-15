import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Product } from '../../../Product.model';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'] 
})
export class BodyComponent {
  @Input() list: Product[] = [];
  @Output() onRemoveProduct = new EventEmitter();
  removeProduct(productId: string) :void {
    this.onRemoveProduct.emit(productId);
  }
  @Output() updateProductQuantity = new EventEmitter<{ id: string, value: number }>();
  updateValue(productId: string, event: any): void {
    const newValue = event?.target?.value; 
    if (newValue !== undefined) {
      const parsedValue = parseInt(newValue, 10);
      if (!isNaN(parsedValue)) {
        this.updateProductQuantity.emit({ id: productId, value: parsedValue });
      }
    }
  }
   Visible = false;
   productId: string = '';
   productName: string = '';
   productPrice: number = 0;
   productDescription: string = '';
   productValue: number = 0;
   productImg: string = '';
 
   constructor() {}

   EditProduct(productId: string) {
    // Tìm mục được chọn từ danh sách sản phẩm
    const selectedItem = this.list.find(item => item.id === productId);
  
    // Kiểm tra xem mục được chọn có tồn tại không
    if (selectedItem) {
      // Gán giá trị của mục được chọn vào các trường của biểu mẫu
      this.productId = selectedItem.id;
      this.productName = selectedItem.name;
      this.productPrice = selectedItem.price;
      this.productDescription = selectedItem.description;
      this.productValue = selectedItem.value;
      this.productImg = selectedItem.img;
      this.Visible = true;
    } else {
      console.error('Item not found');
    }

  }

  submitForm(): void {
    this.updateProduct({
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription,
      value: this.productValue,
      img: this.productImg
    });
  
    // Ẩn biểu mẫu sau khi đã gửi thông tin cập nhật
    this.Visible = false;
  }

  updateProduct(productData: Product): void {
    // Thực hiện logic cập nhật vị trí của sản phẩm
    console.log('Updating product:', productData);
    // Ví dụ: cập nhật vị trí của sản phẩm trong danh sách sản phẩm của thành phần cha
    const index = this.list.findIndex(item => item.id === productData.id);
    if (index !== -1) {
      this.list[index] = productData;
    } else {
      console.error('Item not found');
    }
  }
  
  
}

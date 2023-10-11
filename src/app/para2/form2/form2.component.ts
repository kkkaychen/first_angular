import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductInfo } from '../interfaces/para2interface';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  productForm: FormGroup;
  productList: ProductInfo[];

  // form2 productList output 到 shoppingCenter
  // product 再從 shoppingCenter input productList
  @Output() formEmit = new EventEmitter<ProductInfo>();

  constructor() {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl('')
    });

    this.productList = [
      { id: 1, name: 'Product 1', price: 10 }
    ];
  }

  onSubmit() {
    this.productList.push(this.productForm.value); //新增 form 值到 productList
    this.formEmit.emit(this.productForm.value);
    this.productForm.reset(); // 重置表單
  }

}

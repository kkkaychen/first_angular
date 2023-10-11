import { Component } from '@angular/core';

@Component({
  selector: 'app-pra1',
  templateUrl: './pra1.component.html',
  styleUrls: ['./pra1.component.scss']
})
export class Pra1Component {
  products: string[] = [];
  productName: string = '';
  displayStatus: boolean = true;

  addProduct() {
    // if (this.productName.trim()) { // 空字串等於 falsy 家族
    //   this.products.push(this.productName);
    //   this.productName = '';
    // } else {
    //   alert("請輸入內容");
    // }
    if (!this.productName.trim()) { // 空字串等於 falsy 家族
      alert("請輸入內容");
      return;
    }
    this.products.push(this.productName);
    this.productName = '';

  }

  delAll() {
    // this.products = [];
    this.products.length = 0; // 操作原本的陣列，省記憶體空間
  }

  displayToggle() {
    // this.displayStatus = this.displayStatus === false ? true : false;
    this.displayStatus = !this.displayStatus; // 省掉判斷
  }
}

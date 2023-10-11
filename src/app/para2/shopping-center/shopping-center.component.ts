import { Component } from '@angular/core';
import { ProductInfo } from '../interfaces/para2interface';

@Component({
  selector: 'app-shopping-center',
  templateUrl: './shopping-center.component.html',
  styleUrls: ['./shopping-center.component.scss']
})
export class ShoppingCenterComponent {
  shoppingCenterData: ProductInfo = {
    id: 1,
    name: 'test',
    price: 100
  };

  handleFormSubmission(dataFromForm: ProductInfo) {
    this.shoppingCenterData = dataFromForm;
  }
}

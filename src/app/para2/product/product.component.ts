import { Component, Input } from '@angular/core';
import { ProductInfo } from '../interfaces/para2interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productAll: ProductInfo | undefined;
}

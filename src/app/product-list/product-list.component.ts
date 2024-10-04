import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <ul>
      <li *ngFor="let product of products">
        <img [src]="product.imageUrl" alt="{{ product.name }}" width="50">
        <span>{{ product.name }}</span>
      </li>
    </ul>
  `
})
export class ProductListComponent {
  @Input() products: { name: string, imageUrl: string }[];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card">
      <h2>{{ product.name }}</h2>
      <p>Price: {{ product.price | currency }}</p>
      <img [src]="product.imageUrl" alt="{{ product.name }}">
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    img {
      max-width: 100px;
      height: auto;
    }
  `]
})
export class ProductCardComponent {
  @Input() product: { name: string, price: number, imageUrl: string };
}

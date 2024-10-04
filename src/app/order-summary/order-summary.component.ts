import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  template: `
    <div>
      <h3>Order Summary</h3>
      <ul>
        <li *ngFor="let product of products">{{ product.name }} - {{ product.price | currency }}</li>
      </ul>
      <p>Total: {{ getTotal() | currency }}</p>
    </div>
  `
})
export class OrderSummaryComponent {
  @Input() products: { name: string, price: number }[] = [];

  getTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

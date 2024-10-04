import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  template: `
    <div>
      <p>Converted Amount: {{ amount * exchangeRate | currency }}</p>
    </div>
  `
})
export class CurrencyConverterComponent {
  @Input() amount: number;
  @Input() exchangeRate: number;
}

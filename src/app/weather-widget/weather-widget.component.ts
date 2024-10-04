import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  template: `
    <div>
      <h3>Weather</h3>
      <p>Temperature: {{ weather.temperature }} °C</p>
      <p>Humidity: {{ weather.humidity }} %</p>
      <p>Description: {{ weather.description }}</p>
    </div>
  `
})
export class WeatherWidgetComponent {
  @Input() weather: { temperature: number, humidity: number, description: string };
}

import { Router } from '@angular/router';
import { SearchComponent } from './search-component/search.component';
import { Component } from '@angular/core';
import { DarkSkySearchService } from './services/darksky.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})

export class WeatherComponent  {

    public weather: Weather;

  constructor(private router: Router, http: Http) {
    http.get('/api/weather/city/London').subscribe(result => {
        this.weather = result.json();
  });
}
}

interface Weather {
    temp: string;
    summary: string;
    city: string;
}

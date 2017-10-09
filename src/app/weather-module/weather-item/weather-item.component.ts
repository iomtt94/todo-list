import { Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from '../services/darksky.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

    constructor(private _darkSky: DarkSkySearchService) { }

    public dateDescription: string = 'The weather is for';
    public date = new Date();
    public weatherItem: any;
    public cityName: string = '';
    public data: any;
    public summary: string[];
    public visibility: number[];
    public windSpeed: number[];
    public temparature: number[];
    public cloudCover: number[];
    location = {};
    public iconType: any[];
    public weatherType: string[] = ['clear-day', 'clear-night',
    'rain', 'snow', 'sleet', 'wind', 'fog', 'cloudy', 'partly-cloudy-day',
    'partly-cloudy-night', 'hail', 'thunderstorm', 'tornado'];

    ngOnInit() {
      this._darkSky.weatherSummary.subscribe(data => {
          this.cityName = this._darkSky.cityName;
          this.weatherItem = data;
          console.log(data);
          console.log(this._darkSky.cityName);
          this.data = data;
          this.summary = data['currently']['summary'];
          this.visibility = data['currently']['visibility'];
          this.windSpeed = data['currently']['windSpeed'];
          this.temparature = data['currently']['temperature'];
          this.cloudCover = data['currently']['cloudCover'];
          this.iconType = data['currently']['icon'];
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
                this.location = position.coords;
                console.log(position.coords);
              });
           }
      });
    }
}

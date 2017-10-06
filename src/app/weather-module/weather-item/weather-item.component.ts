import { Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from '../services/darksky.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
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

  constructor(private _darkSky: DarkSkySearchService) {

   }

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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              this.location = position.coords;
              console.log(position.coords);
            });
         }
    });
  }
}

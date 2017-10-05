import { Router } from '@angular/router';
import { SearchComponent } from './search-component/search.component';
import { Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from './services/darksky.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})

export class WeatherComponent implements OnInit {

    constructor(private getData: DarkSkySearchService) {

    }

    ngOnInit() {
    }

}


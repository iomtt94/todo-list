import { Router } from '@angular/router';
import { SearchComponent } from './search-component/search.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from '../services/darksky.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private _darkSky: DarkSkySearchService) {}

    public userSearch: string = '';
    public seachedLocations: any[];
    public isValidSearch: boolean = false;
    itemWeather: any;
    lattitude: number;
    longtitude: number;
    public cityName: string = '';

    returnWeater() {
        return this.itemWeather;
    }

    ngOnInit() {}

    searchCity() {
        if (this.userSearch.length < 2) {
            this.isValidSearch = false;
            return;
        }

        this._darkSky.searchCity(this.userSearch).subscribe(data => {
            this.seachedLocations = data['RESULTS'].filter(item => item.type === 'city');

            this.isValidSearch = true;
        });
    }

    showIt(item) {
        console.log(item);
        this.itemWeather = item;
        this.lattitude = this.itemWeather['lat'];
        this.longtitude = this.itemWeather['lon'];
        this.cityName = this.itemWeather['name'];
        console.log(this.lattitude);
        console.log(this.longtitude);
    }

    showThat() {
        this._darkSky.getWeather(this.lattitude, this.longtitude, this.cityName);
    }

    validation() {
        if (this.userSearch.trim() !== '') return;
        this.seachedLocations = [];
    }
}

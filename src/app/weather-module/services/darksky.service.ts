import { Observable, Subject } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SearchComponent } from '../search-component/search.component';

@Injectable()
export class DarkSkySearchService {


    public weatherSummary = new Subject();
    public cityName: string = '';


    constructor(private _http: HttpClient) { }

    getWeather(lat, long, cityName) {

        this._http.get(`https://api.darksky.net/forecast/e1a8d753a1c87a4b7214a3456f3f09b5/${lat},${long}`).subscribe(data => {
            console.log(data);
            this.cityName = cityName;
            this.weatherSummary.next(data);
        });
    }

    searchCity(userInput) {
       return this._http.get(`http://autocomplete.wunderground.com/aq?query=${userInput}`).map(data => {
            return data;
        });
    }
}

import { HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DarkSkySearchService {

    constructor(private _http: HttpClient) {
    }


    getWeather(lat, long) {
        this._http.get(`https://api.darksky.net/forecast/e1a8d753a1c87a4b7214a3456f3f09b5/${lat},${long}`).subscribe(data => {
            console.log(data);
        });
    }

    searchCity(userInput) {
       return this._http.get(`http://autocomplete.wunderground.com/aq?query=${userInput}`).map(data => {
            return data;
        });
    }
}

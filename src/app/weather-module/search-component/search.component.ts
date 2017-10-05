import {Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from '../services/darksky.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public userSearch: string = '';
    public seachedLocations: any[];
    public isValidSearch: boolean = false;
    constructor(private _darkSky: DarkSkySearchService) {}

    item: any;

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

    }

    validation() {
        if (this.userSearch.trim() !== '') return;
        this.seachedLocations = [];
    }

}

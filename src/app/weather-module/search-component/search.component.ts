import { Component, OnInit } from '@angular/core';
import { DarkSkySearchService } from '../services/darksky.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public userSearch: string;

  constructor(private _darkSry: DarkSkySearchService) { }

  ngOnInit() {
  }

  searchCity() {
      if (this.userSearch.length < 2) return;
      this._darkSry.searchCity(this.userSearch);
  }

}

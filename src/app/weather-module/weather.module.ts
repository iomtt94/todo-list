import { Http } from '@angular/http';
import { DarkSkySearchService } from './services/darksky.service';
import { SearchComponent } from './search-component/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather-app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { TempConverterPipe } from './weather-item/to-celsius.pipe';


const routes: Routes = [
    { path: 'weather', component: WeatherComponent }
];

@NgModule({
  declarations: [
    WeatherComponent,
    SearchComponent,
    WeatherItemComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MdButtonModule
  ],
  exports: [WeatherComponent],
  providers: [DarkSkySearchService, Http]
})
export class WeatherModule {
 }

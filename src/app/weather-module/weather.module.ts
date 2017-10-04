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
import { WeaterListComponent } from './weather-list/weater-list.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';


const routes: Routes = [
    { path: 'weather', component: WeatherComponent }
];

@NgModule({
  declarations: [
    WeatherComponent,
    SearchComponent,
    WeaterListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MdButtonModule
  ],
//   providers: [TodoService],
  exports: [WeatherComponent],
  providers: [DarkSkySearchService]
})
export class WeatherModule {
 }

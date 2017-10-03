import { SearchComponent } from './search-component/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather-app.component';


const routes: Routes = [
    { path: 'weather', component: WeatherComponent }
];

@NgModule({
  declarations: [
    WeatherComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
//   providers: [TodoService],
  exports: [WeatherComponent]
})
export class WeatherModule {
 }

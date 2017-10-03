import { SearchComponent } from './weather-module/search-component/search.component';
import { TodoComponent } from './todo-module/todo.component';
import { TodoListComponent } from './todo-module/todo-list/todo-list.component';
import { TodoService } from './todo-module/services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { TodoModule } from './todo-module/todo.module';
import { WeatherModule } from './weather-module/weather.module';
import { WeatherComponent } from './weather-module/weather-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoItemComponent } from './todo-module/todo-item/todo-item.component';
import { DarkSkySearchService } from './weather-module/services/darksky.service';



const routes: Routes = [
    { path: '', redirectTo: '/todoList', pathMatch: 'full' },
    { path: 'todoList', component: WeatherModule },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
    // { path: 'weather', component: WeaterAppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MdCheckboxModule,
    TodoModule,
    WeatherModule,
    RouterModule.forChild(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

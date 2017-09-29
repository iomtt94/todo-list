import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputAreaComponent } from './todo-input-area/input-area.component';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { WeatherItemComponent } from './weather-app/weather-item/weather-item/weather-item.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'todoList', component: TodoListComponent },
    { path: 'weather', component: WeatherItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    InputAreaComponent,
    WeatherItemComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

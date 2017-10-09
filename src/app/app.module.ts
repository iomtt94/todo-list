import { TodoComponent } from './todo-module/todo.component';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import 'hammerjs';

const routes: Routes = [
    { path: '', redirectTo: '/todoList', pathMatch: 'full' },
    { path: 'todoList', component: WeatherModule },
    { path: 'author', component: AboutAuthorComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PageNotFoundComponent,
    AboutAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MdCheckboxModule,
    TodoModule,
    WeatherModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MdButtonModule, MdCheckboxModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

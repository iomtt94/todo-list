import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputAreaComponent } from './todo-input-area/input-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    InputAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

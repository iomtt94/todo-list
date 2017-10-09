import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputAreaComponent } from './todo-input-area/input-area.component';
import { MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/todoList', pathMatch: 'full' },
    { path: 'todoList', component: TodoListComponent },
];

@NgModule({
  declarations: [
    TodoItemComponent,
    InputAreaComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  exports: [TodoListComponent]
})
export class TodoModule {
 }

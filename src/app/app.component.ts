import { TodoService } from './services/todo.service';
import { Itodo } from './itodo.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemModel } from './models/todo-item-model';
import { ToDoItemCompletedModel } from './models/todo-item-completed-model';

declare var jQuery: any;

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 2';
}

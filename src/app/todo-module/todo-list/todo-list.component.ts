import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDoItemModel } from '../models/todo-item-model';
import { ToDoItemCompletedModel } from '../models/todo-item-completed-model';
import { TodoModule } from '../todo.module';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: ToDoItemModel[];
    fieldNull = true;
    @Input() item: ToDoItemModel;
    todosCountIncompleted = 0;

    constructor(private _todoService: TodoService) {}

    ngOnInit() {
        this.todos = this._todoService.todos;
  }
}

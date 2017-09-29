import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDoItemModel } from '../models/todo-item-model';
import { ToDoItemCompletedModel } from '../models/todo-item-completed-model';

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
        // const retrievedObject = localStorage.getItem('todo');
        // console.log('todo: ', JSON.parse(retrievedObject));
        // const restoredObject = JSON.parse(retrievedObject);
        // this._todoService.addTodo(restoredObject.ToDoItemCompletedModel.);
        // if (typeof(Storage) !== 'undefined') {
        //     // const retrievedObject = localStorage.getItem('todo');
        //     // console.log('todo: ', JSON.parse(retrievedObject));
        //     // const restoredObject = JSON.parse(retrievedObject);
        //     // this._todoService.addTodo(retrievedObject);
        //     this.todos.push(JSON.parse(localStorage.getItem('todo')));
        //     const a = localStorage.getItem('todo', JSON.parse(a));
        //     this._todoService.addTodo(a);
        // } else {
        //     alert('Sorry your browser doesn\'t support local storage');
        // }
  }
}

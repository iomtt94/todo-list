import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemModel } from '../models/todo-item-model';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() item: ToDoItemModel;
  @Input() checked = false;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodoItem(): void {
      this._todoService.deleteTodo(this.item);
  }

}

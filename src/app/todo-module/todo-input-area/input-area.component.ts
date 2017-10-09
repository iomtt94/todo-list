import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-input-area',
    templateUrl: './input-area.component.html',
    styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
    @Input() userInput = '';
    fieldNull: boolean;

    constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(userInput: string) {
    if (this.userInput.trim() === '') return;
    this._todoService.addTodo(userInput);
    this.userInput = '';
  }
}

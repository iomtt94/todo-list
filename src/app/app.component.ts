import { TodoService } from './todo-module/services/todo.service';
import { Itodo } from './todo-module/itodo.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemModel } from './todo-module/models/todo-item-model';
import { ToDoItemCompletedModel } from './todo-module/models/todo-item-completed-model';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // constructor(private router: Router) {}

    public href: string = '';
    title = 'Angular 4';

    // ngOnInit() {
    //     this.href = this.router.url;
    //     console.log(this.href);
    // }
}

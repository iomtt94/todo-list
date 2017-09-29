import { TodoService } from './services/todo.service';
import { Itodo } from './itodo.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemModel } from './models/todo-item-model';
import { ToDoItemCompletedModel } from './models/todo-item-completed-model';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {}

    public href: string = '';
    title = 'Angular 2';

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.href);
    }
}

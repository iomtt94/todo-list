import { Itodo } from './itodo.component';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent {

    constructor(private router: Router) {}
}

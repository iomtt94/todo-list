import { Itodo } from './../itodo.component';
export class ToDoItemCompletedModel implements Itodo {

    constructor(public title: string,
        public isComplited: boolean = false, id: number) {
}

    public toggleIsCompleted() {
        this.isComplited = !this.isComplited;
    }
}

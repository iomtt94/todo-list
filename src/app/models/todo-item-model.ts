import { Itodo } from '../itodo.component';
export class ToDoItemModel implements Itodo {

  constructor(public title: string,
              public isComplited: boolean = false, public id: number) {
  }
  public toggleIsCompleted() {
    this.isComplited = !this.isComplited;
  }
}

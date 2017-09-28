import { Itodo } from '../itodo.component';
export class ToDoItemModel implements Itodo {

  constructor(public title: string,
              public isComplited: boolean = false, public id: number) {
  }
  public toggleIsCompleted(): boolean {
    this.isComplited = !this.isComplited;
    return this.isComplited;
  }
}

import { Component, ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {Todo} from "../../interface";
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.scss'
})
export class TodoItemComponent {
  @Output() removeTodoEvent = new EventEmitter<number>();
  @Output() completeTodoEvent = new EventEmitter<number>();
  @Input({ required: true }) todo!: Todo;
  @Input() editable: boolean = false;
  @Output() editTodoEvent = new EventEmitter<number>();




  editTodo(id: number): void {
    //شایان کمک کرد
    this.editTodoEvent.emit(id);1

  }


  removeTodo(id: number): void {
    this.removeTodoEvent.emit(id);
  }

  onChange(): void {
    this.completeTodoEvent.emit(this.todo.id);
  }
}

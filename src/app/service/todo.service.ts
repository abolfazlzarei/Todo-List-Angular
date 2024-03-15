import { Injectable, signal, WritableSignal } from '@angular/core';

import { FilterCategories, Todo } from '../features/interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: WritableSignal<Todo[]> = signal<Todo[]>([
    { id: Date.now(), text: 'clean House', completed: true },
  ]);
  activeFilter: WritableSignal<FilterCategories> = signal(FilterCategories.All);

  addTodo(text: string): void {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    this.todoList.update((todoList: Todo[]) => [...todoList, newTodo]);
  }

  removeTodo(id: number): void {
    this.todoList.update((todoList: Todo[]) =>
      todoList.filter((todo) => todo.id !== id)
    );
  }

  completeTodo(id: number): void {
    this.todoList.update((todoList: Todo[]) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todoList.update((todoList: Todo[]) =>
      todoList.map((todo) => ({ ...todo, completed: isCompleted }))
    );
  }

  setActiveFilter(filter: FilterCategories): void {
    this.activeFilter.set(filter);
  }




  editTodoDetails(id: number, newText: string): void {
    this.todoList.update((todoList: Todo[]) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }
}

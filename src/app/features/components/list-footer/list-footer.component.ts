import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import { TodoService } from '../../../service/todo.service';
import { FilterCategories } from '../../interface';
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-list-footer',
  standalone: true,
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './list-footer.component.html',
  styleUrl: './list-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFooterComponent {
  @Output() setActiveFilterEvent = new EventEmitter<FilterCategories>();
  @Input() uncompletedTodos?: number = 0;
  filterCategories: WritableSignal<string[]> = signal([
    'All',
    'Active',
    'Completed',
  ]);

  private todoService = inject(TodoService);
  activeFilter: Signal<FilterCategories> = computed(() =>
    this.todoService.activeFilter()
  );

  setFilter(index: number): void {
    this.setActiveFilterEvent.emit(
      this.filterCategories()[index] as FilterCategories
    );
  }
}

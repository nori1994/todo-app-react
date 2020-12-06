import { TodoState } from './features/todo';
import { VisibilityFilterState } from './features/visibilityFilter';

export type Task = {
  id: string;
  title: string;
  deadline?: Date;
  createdAt: Date;
};

export type RootState = {
  todo: TodoState;
  visibilityFilter: VisibilityFilterState;
};

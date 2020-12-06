import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoState, todoSlice, Task } from '../../features/todo';
import TodoList from '../../components/TodoList/TodoList';
import { RootState } from '../../types';
import { VISIBILITY_FILTER } from '../../constans';

const renderSwitch = (
  param: string,
  todoState: TodoState,
): { [id: string]: Task } => {
  switch (param) {
    case VISIBILITY_FILTER.INCOMPLETE:
      return todoState.todoList;
    case VISIBILITY_FILTER.COMPLETED:
      return todoState.doneList;
    default:
      return {};
  }
};

const EnhancedTodoList: FC = () => {
  const visibilityFilterState = useSelector(
    (state: RootState) => state.visibilityFilter,
  );
  const activrFilter = visibilityFilterState.visibilityFilter;
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const { taskDone } = todoSlice.actions;

  return (
    <>
      <h3>{activrFilter}</h3>
      <TodoList
        todos={renderSwitch(visibilityFilterState.visibilityFilter, todoState)}
        taskDone={(id: string) => dispatch(taskDone(id))}
      />
    </>
  );
};

export default EnhancedTodoList;

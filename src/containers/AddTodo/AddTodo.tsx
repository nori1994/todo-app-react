import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { todoSlice } from '../../features/todo';
import AddTodo from '../../components/AddTodo/AddTodo';

const EnhancedAddTodo: FC = () => {
  const dispatch = useDispatch();
  const { taskCreated } = todoSlice.actions;
  return (
    <AddTodo
      taskCreated={(title: string) => dispatch(taskCreated({ title }))}
    />
  );
};

export default EnhancedAddTodo;

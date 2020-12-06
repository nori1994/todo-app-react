import React, { FC } from 'react';

import Todo from '../Todo/Todo';
import { Task } from '../../features/todo';
import './TodoList.css';

interface TodoListProps {
  todos: { [id: string]: Task };
  taskDone?: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos = {},
  taskDone = () => undefined,
}) => {
  const todoList = Object.entries(todos);

  return (
    <ul className="todo-list">
      {todos && todoList.length > 0
        ? todoList.map((todo) => (
            <Todo
              id={todo[1].id}
              title={todo[1].title}
              taskDone={() => taskDone(todo[1].id)}
            />
          ))
        : 'No todos, yay!'}
    </ul>
  );
};

export default TodoList;

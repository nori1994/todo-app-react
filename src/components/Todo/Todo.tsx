/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';

import './Todo.css';

interface TodoProps {
  id: string;
  title: string;
  taskDone: () => void;
}

const Todo: FC<TodoProps> = ({
  id = '',
  title = '',
  taskDone = () => undefined,
}) => {
  return (
    <li key={id} onClick={() => taskDone()}>
      <span>{title}</span>
    </li>
  );
};

export default Todo;

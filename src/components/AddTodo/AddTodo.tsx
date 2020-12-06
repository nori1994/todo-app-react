import React, { FC, useState } from 'react';

import './AddTodo.css';

interface AddTodoProps {
  taskCreated: (titile: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ taskCreated = () => undefined }) => {
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    taskCreated(input);
    setInput('');
  };

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo" type="button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;

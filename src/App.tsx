import React, { FC } from 'react';
import EnhancedTodoList from './containers/TodoList/TodoList';
import EnhancedAddTodo from './containers/AddTodo/AddTodo';
import VisibilityFilters from './containers/VisibilityFilters/VisibilityFilters';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <EnhancedAddTodo />
      <div className="visibility-filter-layout">
        <VisibilityFilters />
      </div>
      <EnhancedTodoList />
    </div>
  );
};

export default App;

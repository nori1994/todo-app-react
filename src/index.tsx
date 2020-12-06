import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { todoSlice } from './features/todo';
import { visibilityFilterSlice } from './features/visibilityFilter';
import App from './App';

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  visibilityFilter: visibilityFilterSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

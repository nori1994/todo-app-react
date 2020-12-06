/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export type Task = {
  id: string;
  title: string;
  deadline?: Date;
  createdAt: Date;
};

export type TodoState = {
  todoList: { [id: string]: Task };
  doneList: { [id: string]: Task };
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { todoList: {}, doneList: {} } as TodoState,

  reducers: {
    taskCreated: (
      state: TodoState,
      action: PayloadAction<Pick<Task, 'title' | 'deadline'>>,
    ) => {
      const id: string = uuid();
      const createdAt = new Date();
      state.todoList[id] = { ...action.payload, id, createdAt };
    },
    taskDone: (state: TodoState, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.todoList[id];

      if (task) {
        state.doneList[id] = { ...task };
        delete state.todoList[id];
      }
    },
  },
});

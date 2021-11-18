import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import merge from 'lodash/merge';

import Todo from '@/types/todo';

import todosAdd from './actions/add';
import todosComplete from './actions/complete';
import todosRetrieve from './actions/retrieve';

type InitialState = {
  todos: Todo[],
};

const initialState: InitialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }: AnyAction) => merge(state, payload.todos));

    builder.addCase(todosAdd.fulfilled, (state, { payload }) => {
      state.todos.push(payload);
    });

    builder.addCase(todosComplete.fulfilled, (state, { payload }) => {
      const todo = state.todos.find(todo => todo.id === payload.id);
      if (!todo) return;

      todo.completed = payload.completed;
    });

    builder.addCase(todosRetrieve.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
  },
});

export default todosSlice;

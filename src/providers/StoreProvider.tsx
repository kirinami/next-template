import { configureStore } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import todosSlice from '../slices/todos/todos';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  devTools: false,
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Selector<Selected> = (state: State) => Selected;

export default function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

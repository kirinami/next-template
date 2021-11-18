import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import todosSlice from '@/slices/todos/todos';

const makeStore = () => configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
  },
  devTools: false,
});

export type Store = ReturnType<typeof makeStore>;
export type State = ReturnType<Store['getState']>;
export type Dispatch = Store['dispatch'];
export type Selector<Selected> = (state: State) => Selected;

export const wrapper = createWrapper<Store>(makeStore);

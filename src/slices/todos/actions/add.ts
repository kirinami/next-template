import { createAsyncThunk } from '@reduxjs/toolkit';

import Todo from '../../../types/todo';
import delay from '../../../utils/delay';

type Req = Pick<Todo, 'title'>;

type Res = Todo;

const todosAdd = createAsyncThunk<Res, Req>('todos/add', async ({ title }) => {
  await delay(1000);
  return {
    id: Math.round(Math.random() * 1000000),
    title,
    completed: false,
  };
});

export default todosAdd;

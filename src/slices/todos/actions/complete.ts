import { createAsyncThunk } from '@reduxjs/toolkit';

import Todo from '../../../types/todo';
import delay from '../../../utils/delay';

type Req = Pick<Todo, 'id' | 'completed'>;

type Res = Req;

const todosComplete = createAsyncThunk<Res, Req>('todos/complete', async ({ id, completed }) => {
  await delay(1500);
  return {
    id,
    completed,
  };
});

export default todosComplete;

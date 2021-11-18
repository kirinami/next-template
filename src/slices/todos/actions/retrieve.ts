import { createAsyncThunk } from '@reduxjs/toolkit';

import Todo from '@/types/todo';
import delay from '@/utils/delay';

type Req = void;

type Res = Todo[];

const todosRetrieve = createAsyncThunk<Res, Req>('todos/retrieve', async () => {
  await delay(500);
  return [
    { id: 1, title: '1', completed: Math.random() > 0.5 },
    { id: 2, title: '2', completed: Math.random() > 0.5 },
    { id: 3, title: '3', completed: Math.random() > 0.5 },
    { id: 4, title: '4', completed: Math.random() > 0.5 },
    { id: 5, title: '5', completed: Math.random() > 0.5 },
  ];
});

export default todosRetrieve;

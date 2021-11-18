import { createAsyncThunk } from '@reduxjs/toolkit';

import Todo from '../../../types/todo';
import delay from '../../../utils/delay';

type Req = void;

type Res = Todo[];

const todosRetrieve = createAsyncThunk<Res, Req>('todos/retrieve', async () => {
  await delay(2000);
  return [
    { id: 1, title: '1', completed: false },
    { id: 2, title: '2', completed: false },
    { id: 3, title: '3', completed: false },
    { id: 4, title: '4', completed: false },
    { id: 5, title: '5', completed: false },
  ];
});

export default todosRetrieve;

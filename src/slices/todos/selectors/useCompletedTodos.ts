import { createSelector } from 'reselect';

import useSelector from '@/hooks/useSelector';

import { selectTodos } from './useTodos';

export const selectCompletedTodos = createSelector(selectTodos, todos => todos.filter(todo => todo.completed));

export default function useCompletedTodos() {
  return useSelector(selectCompletedTodos);
}

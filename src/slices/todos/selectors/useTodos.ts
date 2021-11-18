import useSelector from '@/hooks/useSelector';
import { State } from '@/store';

export const selectTodos = (state: State) => state.todos.todos;

export default function useTodos() {
  return useSelector(selectTodos);
}

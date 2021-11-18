import useSelector from '../../../hooks/useSelector';
import { State } from '../../../providers/StoreProvider';

export const selectTodos = (state: State) => state.todos.todos;

export default function useTodos() {
  return useSelector(selectTodos);
}

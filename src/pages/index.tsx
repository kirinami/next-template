import type { NextPage } from 'next';
import Image from 'next/image';

import Spinner from '@/components/Spinner';
import Navbar from '@/components/Navbar';
import useAction from '@/hooks/useAction';
import todosAdd from '@/slices/todos/actions/add';
import todosComplete from '@/slices/todos/actions/complete';
import todosRetrieve from '@/slices/todos/actions/retrieve';
import useTodos from '@/slices/todos/selectors/useTodos';
import useCompletedTodos from '@/slices/todos/selectors/useCompletedTodos';
import styles from '@/styles/index.module.scss';
import { wrapper } from '@/store';

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch, getState }) => async () => {
  await dispatch(todosRetrieve());

  return {
    props: {},
  };
});

const Home: NextPage = () => {
  const [addTodo, addTodoState] = useAction(todosAdd);
  const [completeTodo, completeTodoState] = useAction(todosComplete);
  const [retrieveTodos, retrieveTodosState] = useAction(todosRetrieve);

  const todos = useTodos();
  const completedTodos = useCompletedTodos();

  const addTodoHandler = async () => {
    await addTodo({ title: prompt('Item title:') || 'Untitled' });
  };

  const completeTodoHandler = async (id: number, completed: boolean) => {
    await completeTodo({
      id,
      completed,
    }, id);
  };

  return (
    <>
      <Navbar/>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className="container mx-auto p-8 space-y-8">
            <h3 className="font-semibold text-2xl">Home</h3>

            {retrieveTodosState('loading') && (
              <Spinner/>
            )}

            <ul>
              {todos.map(todo => (
                <li key={todo.id}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {completeTodoState('loading', todo.id)
                      ? <Spinner size="xs"/>
                      : (
                        <input
                          type="checkbox"
                          className="border-green-600 rounded text-green-600 bg-white focus:ring-0"
                          checked={todo.completed}
                          onChange={event => completeTodoHandler(todo.id, event.target.checked)}
                        />
                      )}
                    <span>{todo.title}</span>
                  </label>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="flex justify-center items-center px-6 py-3 space-x-3 rounded text-white bg-green-600 hover:bg-green-700 cursor-pointer"
              onClick={addTodoHandler}
            >
              {addTodoState('loading') || completeTodoState('loading')
                ? <Spinner variant="secondary" size="xs"/>
                : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                  </svg>
                )}
              <span>Add item</span>
            </button>

            <pre>{JSON.stringify(todos, null, 2)}</pre>

            <hr/>

            <pre>{JSON.stringify(completedTodos, null, 2)}</pre>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
            <Image src={require('@/assets/vercel.svg').default.src} alt="Vercel Logo" width={72} height={16}/>
          </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;

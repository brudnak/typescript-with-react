import React, { Fragment, useState } from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  comlete: boolean;
}

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, comlete: false }];
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>{todo.text}</div>
        ))}
      </section>
    </Fragment>
  );
};

export default App;

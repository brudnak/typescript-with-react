import React, { Fragment } from 'react';
import './App.css';

const App = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
        <input type='text' required />
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
};

export default App;

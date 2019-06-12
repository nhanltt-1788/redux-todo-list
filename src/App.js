import React from 'react';
import './App.css';
import FilterList from './components/FilterList';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

function App() {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <FilterList />
    </div>
  );
}

export default App;

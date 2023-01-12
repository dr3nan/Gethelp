import React from 'react';
import CreateToDo from './components/Todo/createtodo/CreateTodo';
import TodoList from './components/Todo/todolist/TodoList'

function App() {
  return (
    <div className='App'>
      <CreateToDo />
      <TodoList />
    </div>
  );
}

export default App;

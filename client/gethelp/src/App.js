import React from 'react';
import CreateTicket from './components/Ticket/createticket/CreateTicket';
import CreateToDo from './components/Todo/createtodo/CreateTodo';
import TodoList from './components/Todo/todolist/TodoList'

function App() {
  return (
    <div className='App'>
      <CreateTicket />
      <br />
      <br />
      <CreateToDo />
      <TodoList />
    </div>
  );
}

export default App;

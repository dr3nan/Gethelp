import React from 'react';
import CreateTicket from './components/Ticket/createticket/CreateTicket';
import TicketList from './components/Ticket/ticketlist/TicketsList';
import CreateToDo from './components/Todo/createtodo/CreateTodo';
import TodoList from './components/Todo/todolist/TodoList'
import { ActiveTicket } from './components/Ticket/activeticket/ActiveTicket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <CreateTicket />
              <br />
              <TicketList />
              <br />
            </>
          } />
          <Route path='/admin' element={
            <>
              <CreateToDo />
              <TodoList />
            </>
          }
          />
          <Route path='/ticket' element={
            <ActiveTicket />
          } />
        </Routes>
      </BrowserRouter>
      {/* <CreateTicket />
      <br />
      <br />
      <TicketList />
      <br />
      <br /> */}
      {/* <MessageList /> */}
      {/* <br />
      <br />
      <CreateToDo /> */}
      {/* <br />
      <TodoList /> */}
    </div>
  );
}

export default App;

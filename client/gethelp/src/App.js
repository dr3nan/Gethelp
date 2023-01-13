import React from 'react';
// import CreateTicket from './components/Ticket/createticket/CreateTicket';
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
              <h1>This is the main page, depending on who logs in, it will redirect to a different page once logged in</h1>
              <br />
            </>
          } />
          <Route path='/admin' element={
            <>
              <h1>This is the admin ticket page where all tickets should be visible and would have the todos</h1>
              <CreateToDo />
              <br />
              <TodoList />
              <br />
              <br />
              <TicketList />
            </>
          }
          />
          <Route path='/ticket/:id' element={
            <>
              <h1>Here are all the msessages from the ticket rendered</h1>
              <ActiveTicket />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

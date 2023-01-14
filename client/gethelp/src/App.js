import React, { useEffect } from 'react';
import CreateTicket from './components/Ticket/createticket/CreateTicket';
import './components/Ticket/createticket/CreateTicket.css';
import TicketList from './components/Ticket/ticketlist/TicketsList';
import './components/Ticket/ticketlist/TicketsList.css';
import CreateToDo from './components/Todo/createtodo/CreateTodo';
import TodoList from './components/Todo/todolist/TodoList';
import { ActiveTicket } from './components/pages/activeticket/ActiveTicket';
import './components/pages/activeticket/ActiveTicket.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import TicketListView from './components/pages/ticketlistview/TicketListView';

function App() {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  console.log('User',user)

  // async function getUserFromAuth0ToAPI (Auth0User) {
  //   const userToCreate =  {
  //     username: Auth0User.name,
  //     email: Auth0User.email
  //   }
  //   const userCreated = await fetch ('path to my server', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userToCreate)
  //   });

  //   return await userCreated.json();
  // }

  // useEffect(() => {
  //   user && getUserFromAuth0ToAPI(user);
  // }, [user]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <>
              <h1>This is the main page, depending on who logs in, it will redirect to a different page once logged in</h1>
              {
              isAuthenticated
              ? (<div><h2>Logged In, {user.nickname}</h2><button onClick={() => { logout() }}> LOGOUT </button></div>)
              : (<div><h2>Logged out</h2><button onClick={() => { loginWithRedirect() }}> LOGIN </button></div>)
              }
            </>
          } />
          <Route path='/ticket-list' element={
            <>
              <h1>This is the admin ticket page where all tickets should be visible and would have the todos</h1>
              <TicketListView />
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

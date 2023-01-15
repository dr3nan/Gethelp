import React from 'react';
import './components/Ticket/createticket/CreateTicket.css';
import './components/Ticket/ticketslist/TicketsList.css';
import './components/Ticket/ticket/Ticket.css';
import ActiveTicket from './components/pages/activeticket/ActiveTicket';
import './components/pages/activeticket/ActiveTicket.css';
import './components/Login/Login.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import TicketListView from './components/pages/ticketlistview/TicketListView';
import LoginView from './components/pages/loginview/LoginView';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <>
              <h1>This is the main page, depending on who logs in, it will redirect to a different page once logged in</h1>
              <LoginView />
              {/* {
              isAuthenticated
              ? (<div><h2>Logged In, {user.nickname}</h2><button onClick={() => { logout() }}> LOGOUT </button></div>)
              : (<div><h2>Logged out</h2><button onClick={() => { loginWithRedirect() }}> LOGIN </button></div>)
              } */}
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

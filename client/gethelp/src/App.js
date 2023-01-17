import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ActiveTicket from './components/pages/activeticket/ActiveTicket';
import TicketListView from './components/pages/ticketlistview/TicketListView';
import LoginView from './components/pages/loginview/LoginView';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <>
              {/* <h1>This is the main page, depending on who logs in, it will redirect to a different page once logged in</h1> */}
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
              {/* <h1>This is the ticket page where all tickets should be visible</h1> */}
              <button className='user-icon'>User</button>
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

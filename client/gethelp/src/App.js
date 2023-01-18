import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
              <LoginView />
            </>
          }
          />
          <Route path='/ticket-list' element={
            <>
              <TicketListView />
            </>
          }
          />
          <Route path='/ticket/:id' element={
            <>
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

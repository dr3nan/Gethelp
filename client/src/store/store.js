import { configureStore, } from '@reduxjs/toolkit';
import todoReducer from '../slices/TodoSlice';
import ticketReducer from '../slices/TicketSlice';
import messagesReducer from '../slices/MessageSlice';
import activeTicketReducer from '../slices/ActiveTicketSlice';
import userReducer from '../slices/UserSlice';

const preloadedStateSTR = localStorage.getItem('user');
let preloadedState;
if (preloadedStateSTR) {
  preloadedState = JSON.parse(preloadedStateSTR);
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
    tickets: ticketReducer,
    messages: messagesReducer,
    activeTicket: activeTicketReducer,
    user: userReducer,
  },
  preloadedState: {
    user: preloadedState
  }
});

export default store;

import { configureStore, } from '@reduxjs/toolkit';
import todoReducer from '../slices/TodoSlice';
import ticketReducer from '../slices/TicketSlice';
import messagesReducer from '../slices/MessageSlice';
import activeTicketReducer from '../slices/ActiveTicketSlice';
import userReducer from '../slices/UserSlice';

const preloadedStateSTR = localStorage.getItem('user');
// console.log({ preloadedStateSTR });
let preloadedState;
if (preloadedStateSTR) {
  // console.log('inside the if');
  preloadedState = JSON.parse(preloadedStateSTR);
  // console.log({ preloadedState });
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
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

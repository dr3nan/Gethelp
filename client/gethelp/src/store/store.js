import { configureStore, } from '@reduxjs/toolkit';
import todoReducer from '../slices/TodoSlice';
import ticketReducer from '../slices/TicketSlice';
import messagesReducer from '../slices/MessageSlice';
import activeTicketReducer from '../slices/ActiveTicketSlice';
import userReducer from '../slices/UserSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tickets: ticketReducer,
    messages: messagesReducer,
    activeTicket: activeTicketReducer,
    user: userReducer
  }
});

export default store;

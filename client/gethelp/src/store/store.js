import { configureStore, } from '@reduxjs/toolkit'
import todoReducer from '../slices/TodoSlice'
import tikcetReducer from '../slices/TicketSlice'
import messagesReducer from '../slices/MessageSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tickets: tikcetReducer,
    messages: messagesReducer
  }
});

export default store;

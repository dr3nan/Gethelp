import { configureStore, } from '@reduxjs/toolkit'
import todoReducer from '../slices/TodoSlice'
import tikcetReducer from '../slices/TicketSlice'
import messageReducer from '../slices/MessageSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tickets: tikcetReducer,
    messages: messageReducer
  }
});

export default store;

import { configureStore, } from '@reduxjs/toolkit'
import todoReducer from '../slices/TodoSlice'
import tikcetReducer from '../slices/TicketSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tickets: tikcetReducer
  }
});

export default store;

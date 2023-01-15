import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.name = '';
      state.date = '';
      state.note = '';
      console.log('new state after reset:', state);
    },

    setTickets: (state, action) => {
      // console.log('redux data',action.payload)
      return action.payload;
    },

    addTicket: (state, action) => {
      // console.log('Ticket added', action.payload);
      state.ticket = action.payload;
    },

    deleteTicket: (state, action) => {
      // console.log('Ticket deleted', action.payload);
      return state.filter(ticket => ticket._id !== action.payload._id);
    },

    editTicket: (state, action) => {
      const ticketIndex = state.findIndex(ticket => ticket._id === action.payload._id);
      // console.log('Ticket edited', ticketIndex);
      state[ticketIndex] = action.payload;
    }
  }
});

export const { resetForm, setTickets, addTicket, deleteTicket, editTicket } = ticketSlice.actions;

export default ticketSlice.reducer;

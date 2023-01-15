import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.name = ''
      state.date = ''
      state.note = ''
    },

    setTickets: (state, action) => {
      return action.payload;
    },

    addTicket: (state, action) => {
      state.push(action.payload);
    },

    deleteTicket: (state, action) => {
      return state.filter(ticket => ticket._id !== action.payload._id);
    },

    editTicket: (state, action) => {
      const ticketIndex = state.findIndex(ticket => ticket._id === action.payload._id);
      state[ticketIndex] = action.payload;
    }
  }
});

export const { resetForm, setTickets, addTicket, deleteTicket, editTicket } = ticketSlice.actions;

export default ticketSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    // saveMessage: (state, action) => {

    // }
  }
});

export const { activeTicket } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
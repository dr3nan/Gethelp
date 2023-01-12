import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      console.log('active ticket', action.payload)
      return action.payload;
    }
  }
});

export const { activeTicket } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
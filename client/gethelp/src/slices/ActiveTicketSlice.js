import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    addMessageToTicket: (state, action) => {
      state.messages.push(action.payload);
    }
  }
});

export const { activeTicket, addMessageToTicket } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
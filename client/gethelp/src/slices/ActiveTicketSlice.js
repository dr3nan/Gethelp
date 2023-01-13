import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    addMessageStore: (state, action) => {
      state.messages.message.push(action.payload);
    }
  }
});

export const { activeTicket, addMessageStore } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
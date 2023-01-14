import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    setUserFromActiveTicket: (state, action) => {
      return action.payload;
    },

    addMessageToTicket: (state, action) => {
      state.messages.push(action.payload);
    },

    editMessageInTicket: (state, action) => {
      const messageIndex = state.findIndex(message => message._id === action.payload._id);
      state[messageIndex] = action.payload;
    }
  }
});

export const { activeTicket, addMessageToTicket, editMessageInTicket, setUserFromActiveTicket } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
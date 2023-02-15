import { createSlice } from '@reduxjs/toolkit';

// TODO: define as object
const initialState = {
  title: '',
  status: '',
  user: '',
  date: '',
  messages: [],
};

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    userFromActiveTicket: (state, action) => {
      return action.payload;
    },

    addMessageToTicket: (state, action) => {
      state.messages.push(action.payload);
      return state;
    },

    editMessageInTicket: (state, action) => {
      const messageIndex = state.findIndex(message => message._id === action.payload._id);
      state[messageIndex] = action.payload;
    }
  }
});

export const { activeTicket, addMessageToTicket, editMessageInTicket, userFromActiveTicket } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;

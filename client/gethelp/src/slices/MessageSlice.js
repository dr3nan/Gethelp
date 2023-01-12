import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.message = '';
      console.log('new state after reset:', state);
    },

    setMessages: (state, action) => {
      console.log('redux data', action.payload)
      return action.payload;
    },

    addMessage: (state, action) => {
      console.log('Ticket added', action.payload);
      state.push(action.payload);
    },

    deleteMessage: (state, action) => {
      console.log('Ticket deleted', action.payload);
      return state.filter(ticket => ticket._id !== action.payload._id);
    },

    editMessage: (state, action) => {
      const messageIndex = state.findIndex(message => message._id === action.payload._id);
      console.log('Ticket edited', messageIndex);
      state[messageIndex] = action.payload;
    }
  }
});

export const { resetForm, setMessages, addMessage, deleteMessage, editMessage } = messageSlice.actions;

export default messageSlice.reducer;
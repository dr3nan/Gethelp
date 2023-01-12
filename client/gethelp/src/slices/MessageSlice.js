import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = '';
      console.log('new state after reset:', state);
    },

    setMessages: (state, action) => {
      console.log('redux data', action.payload)
      return action.payload;
    },

    addMessage: (state, action) => {
      console.log('Message added', action.payload);
      state.push(action.payload);
    },

    deleteMessage: (state, action) => {
      console.log('Message deleted', action.payload);
      return state.filter(message => message._id !== action.payload._id);
    },

    editMessage: (state, action) => {
      const messageIndex = state.findIndex(message => message._id === action.payload._id);
      console.log('Message edited', messageIndex);
      state[messageIndex] = action.payload;
    }
  }
});

export const { resetMessage, setMessages, addMessage, deleteMessage, editMessage } = messageSlice.actions;

export default messageSlice.reducer;
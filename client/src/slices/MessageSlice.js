import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = '';
    },

    setMessages: (state, action) => {
      return action.payload;
    },

    addMessage: (state, action) => {
      state.push(action.payload);
    },

    deleteMessage: (state, action) => {
      return state.filter(message => message._id !== action.payload._id);
    },

    editMessage: (state, action) => {
      const messageIndex = state.findIndex(message => message._id === action.payload._id);
      state[messageIndex] = action.payload;
    }
  }
});

export const { resetMessage, setMessages, addMessage, deleteMessage, editMessage } = messageSlice.actions;

export default messageSlice.reducer;
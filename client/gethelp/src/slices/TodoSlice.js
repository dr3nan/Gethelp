import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.name = '';
      state.date = '';
      state.note = '';
      console.log('state', state);
    },

    setTodos: (state, action) => {
      return action.payload;
    },

    addTodo: (state, action) => {
      console.log('Todo added', action.payload);
      state.push(action.payload);
    },
  }
});

export const { resetForm } = todoSlice.actions;

export default todoSlice.reducer;

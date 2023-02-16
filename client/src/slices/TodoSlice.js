import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.name = ''
      state.date = ''
      state.note = ''
    },

    setTodos: (state, action) => {
      return action.payload;
    },

    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      return state.filter(toDo => toDo._id !== action.payload._id);
    },

    editTodo: (state, action) => {
      const todoIndex = state.findIndex(toDo => toDo._id === action.payload._id);
      state[todoIndex] = action.payload;
    }
  }
});

export const { resetForm, setTodos, addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

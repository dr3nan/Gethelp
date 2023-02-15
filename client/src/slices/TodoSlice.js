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
      // console.log('state', state);
    },

    setTodos: (state, action) => {
      return action.payload;
    },

    addTodo: (state, action) => {
      // console.log('Todo added', action.payload);
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      // console.log('Todo deleted', action.payload);
      return state.filter(toDo => toDo._id !== action.payload._id);
    },

    editTodo: (state, action) => {
      const todoIndex = state.findIndex(toDo => toDo._id === action.payload._id);
      // console.log('Todo edited', todoIndex);
      state[todoIndex] = action.payload;
    }
  }
});

export const { resetForm, setTodos, addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

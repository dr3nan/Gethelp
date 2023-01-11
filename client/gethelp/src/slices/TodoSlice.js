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

    
  }
});

export const { resetForm } = todoSlice.actions;

export default todoSlice.reducer;

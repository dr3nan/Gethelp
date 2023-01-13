import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState,
  reducers: {
    activeTicket: (state, action) => {
      return action.payload;
    },

    setMessage: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { activeTicket, setTicketId } = activeTicketSlice.actions;

export default activeTicketSlice.reducer;
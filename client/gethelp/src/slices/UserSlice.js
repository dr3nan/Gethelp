import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userLoggedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // isUserLogged: (state, action) => {
    //   return action.payload;
    // },

    isUserLogged: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { isUserLogged } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
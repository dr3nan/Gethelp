import { createSlice } from '@reduxjs/toolkit';
// TODO: Change to object
const initialState = {
  isLoggedIn: false,
  user: {},
};

const userLoggedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isUserLogged: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },

    logou: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    // isUserLogged: (state, action) => {
    //   state.user = action.payload;
    // }
  }
});

export const { isUserLogged } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
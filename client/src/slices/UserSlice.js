import { createSlice } from '@reduxjs/toolkit';
// TODO: Change to object
const initialState = {
  isLoggedIn: false
};

const userLoggedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isUserLogged: (state, action) => {
      state = {...action.payload, isLoggedIn: true};
      return state;
    },

    logout: (state) => {
      state.isLoggedIn = false;
    },

    activeUser: (state, action) => {
      state = {...action.payload, isLoggedIn: true};
      return state;
    }
  }
});

export const { isUserLogged, logout, activeUser } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
// TODO: Change to object
console.log('user in local storage',JSON.parse(localStorage.getItem('user')))
const initialState = {
  isLoggedIn: false
};

const userLoggedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isUserLogged: (state, action) => {
      state = {...action.payload, isLoggedIn: true};
      console.log('state',state);
      return state;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      // state.user = {};
    },

    activeUser: (state, action) => {
      state = {...action.payload, isLoggedIn: true};
      return state;
    }
  }
});

export const { isUserLogged, logout, activeUser } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;

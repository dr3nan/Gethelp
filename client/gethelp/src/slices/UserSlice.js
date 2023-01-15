import { createSlice } from '@reduxjs/toolkit';
// TODO: Change to object
const initialState = {
  user: null
};

const userLoggedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // isUserLogged: (state, action) => {
    //   return action.payload;
    // },

    isUserLogged: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { isUserLogged } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
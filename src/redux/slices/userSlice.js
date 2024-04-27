import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userData: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const authActions = userSlice.actions;
export default userSlice.reducer;

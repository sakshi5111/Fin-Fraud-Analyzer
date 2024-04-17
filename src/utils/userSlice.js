import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isMenuOpen: true,
  },
  reducers: {
    addUser(state, action) {
      state.currentUser = action.payload;
    },
    removeUser(state, action) {
      state.currentUser = null;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { addUser, removeUser, toggleMenu } = userSlice.actions;

export default userSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { isMenuOpen } = appSlice.actions;

export default appSlice.reducer;

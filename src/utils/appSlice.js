import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isNavBarOpen: true,
  },
  reducers: {
    toggleNavBar: (state, action) => {
      state.isNavBarOpen = !state.isNavBarOpen;
    },
    openNavBar: (state, action) => {
      state.isNavBarOpen = true;
    },
    closeNavBar: (state, action) => {
      state.isNavBarOpen = false;
    },
  },
});

export const { toggleNavBar, openNavBar, closeNavBar } = appSlice.actions;
export default appSlice.reducer;

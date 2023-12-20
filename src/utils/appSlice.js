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
  },
});

export const { toggleNavBar } = appSlice.actions;
export default appSlice.reducer;

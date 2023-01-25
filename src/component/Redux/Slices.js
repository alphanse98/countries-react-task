import { createSlice } from "@reduxjs/toolkit";

export let slices = createSlice({
  name: "slicestate",

  initialState: {
    data: [],
    search: "",
    dark: false,
  },

  reducers: {
    dataaction: (state, action) => {
      state.data = action.payload;
    },
    searchaction: (state, action) => {
      state.search = action.payload;
    },
    darkaction: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { dataaction, searchaction, darkaction } = slices.actions;
export default slices.reducer;

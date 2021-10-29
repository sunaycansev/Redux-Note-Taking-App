import { createSlice } from "@reduxjs/toolkit";
import { getNotesAsync } from "./notesServices";

const initialState = {
  items: [],
  isLoading: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotesAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default notesSlice.reducer;

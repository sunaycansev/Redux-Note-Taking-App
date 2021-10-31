import { createSlice } from "@reduxjs/toolkit";
import { getNotesAsync, postNotesAsync } from "./notesServices";

const initialState = {
  items: [],
  isLoading: false,
  isLoadingWhilePost: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: {
    // get Notes from db
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
    // post note to db
    [postNotesAsync.pending]: (state) => {
      state.isLoadingWhilePost = true;
    },
    [postNotesAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoadingWhilePost = false;
    },
    [postNotesAsync.rejected]: (state, action) => {
      state.isLoadingWhilePost = false;
      state.error = action.error.message;
    },
  },
});

export default notesSlice.reducer;

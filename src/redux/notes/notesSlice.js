import { createSlice } from "@reduxjs/toolkit";
import {
  getNotesAsync,
  postNotesAsync,
  deleteNotesAsync,
} from "./notesServices";

const initialState = {
  items: [],
  isLoading: false,
  isLoadingWhilePost: false,
  searchValue: "",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
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
    // delete note from db
    [deleteNotesAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteNotesAsync.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.isLoading = false;
    },
    [deleteNotesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
export const filteredItems = (state) => {
  if (state.notes.searchValue === "") {
    return state.notes.items;
  }
  return state.notes.items.filter((item) =>
    item.title.includes(state.notes.searchValue)
  );
};
export const { changeSearchValue } = notesSlice.actions;
export default notesSlice.reducer;

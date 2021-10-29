import { createSlice } from "@reduxjs/toolkit";
import { getNotesAsync } from "./notesServices";

const initialState = {
  items: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotesAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default notesSlice.reducer;

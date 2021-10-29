import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`
    );
    return res.data;
  }
);

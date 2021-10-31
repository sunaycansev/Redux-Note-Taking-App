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

export const postNotesAsync = createAsyncThunk(
  "notes/postNotesAsync",
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`,
      data
    );
    return response.data;
  }
);

export const deleteNotesAsync = createAsyncThunk(
  "notes/deleteNotesAsync",
  async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`
    );
    return response.data;
  }
);

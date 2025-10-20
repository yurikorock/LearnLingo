//operations

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://learnlingo-v-1-1-default-rtdb.firebaseio.com";

export const getTeachersList = createAsyncThunk(
  "get/getTeachersList",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/.json");
      const teachersArray = Object.values(data || {});
      return teachersArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

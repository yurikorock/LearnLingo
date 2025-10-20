import { createSlice } from "@reduxjs/toolkit";
import { getTeachersList } from "./operations.js";

const initialState = {
  teachersList: [],
  isLoading: false,
  error: null,
  
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTeachersList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachersList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachersList = action.payload;
      })
      .addCase(getTeachersList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default teachersSlice.reducer;

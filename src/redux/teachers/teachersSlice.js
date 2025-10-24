import { createSlice } from "@reduxjs/toolkit";
import { getTeachersList } from "./operations.js";

const initialState = {
  teachersList: [],
  isLoading: false,
  error: null,
  total: 0,
  page: 1,
  
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
   reducers: {
    resetTeachers(state) {
      state.teachersList = [];
      state.page = 1;
      state.total = 0;
    },
    nextPage(state) {
      state.page += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTeachersList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachersList.fulfilled, (state, action) => {
        state.isLoading = false;
        const { teachers, total, page } = action.payload;

        if (page === 1) {
          state.teachersList = teachers;
        } else {
          // 🔹 Якщо сторінка > 1 — додаємо нових викладачів
          state.teachersList = [...state.teachersList, ...teachers];
        }

        state.total = total;
        state.page = page;
      })
      .addCase(getTeachersList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { resetTeachers, nextPage } = teachersSlice.actions;
export default teachersSlice.reducer;

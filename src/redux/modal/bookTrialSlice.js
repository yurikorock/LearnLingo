import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalBookTrialSlice = createSlice({
  name: "bookTrial",
  initialState,
  reducers: {
    openBookTrial: (state) => {
      state.isOpen = true;
    },
    closeBookTrial: (state) => {
      state.isOpen = false;
    },
  },
});

export const {openBookTrial, closeBookTrial} = modalBookTrialSlice.actions;
export default modalBookTrialSlice.reducer;
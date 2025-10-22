import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
  level: "",
  price: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetFilters: (state) => {
      state.language = "";
      state.level = "";
      state.price = "";
    },
  },
});
export const { setLanguage, setLevel, setPrice, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;

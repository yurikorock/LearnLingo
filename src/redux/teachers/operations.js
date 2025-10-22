//operations

import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, child } from "firebase/database";
import { db } from "../../firebase.js";

export const getTeachersList = createAsyncThunk(
  "teachers/getTeachersList",
  async ({ language, level, price }, thunkAPI) => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "/teachers"));
      if (!snapshot.exists()) {
        return [];
      }
      const teachersArray = Object.values(snapshot.val());
      const filtered = teachersArray.filter((teacher) => {
        const matchLanguage =
          !language ||
          teacher.languages === language ||
          teacher.languages?.includes(language);
        const matchLevel =
          !level || teacher.levels === level || teacher.levels?.includes(level);
        const matchPrice = !price || teacher.price_per_hour <= Number(price);
        return matchLanguage && matchLevel && matchPrice;
      });
      return filtered;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET WITH AXIOS //

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://learnlingo-v-1-1-default-rtdb.firebaseio.com";

// export const getTeachersList = createAsyncThunk(
//   "get/getTeachersList",
//   async (_, thunkAPI) => {
//     try {
//       const {data} = await axios.get("/.json");
//       const teachersArray = Object.values(data || {});
//       return teachersArray;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

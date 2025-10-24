//operations

import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, child } from "firebase/database";
import { db } from "../../firebase.js";

export const getTeachersList = createAsyncThunk(
  "teachers/getTeachersList",
  async ({ language, level, price, page = 1, limit = 4 }, thunkAPI) => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "/teachers"));
      if (!snapshot.exists()) {
        return { teachers: [], total: 0, page };
      }
      const teachersData = snapshot.val();
      const teachersArray = teachersData.teachersList
        ? teachersData.teachersList
        : Object.values(teachersData);

      // console.log("Filters:", { language, level, price });
      // console.log("Teachers array:", teachersArray);

      const filtered = teachersArray.filter((teacher) => {
        const matchLanguage =
          !language ||
          teacher.languages?.some(
            (l) => l.toLowerCase() === language.toLowerCase()
          );
        const matchLevel =
          !level ||
          teacher.levels?.some((l) =>
            l.toLowerCase().includes(level.toLowerCase())
          );
        const matchPrice = !price || teacher.price_per_hour <= Number(price);
        return matchLanguage && matchLevel && matchPrice;
      });
      // console.log("Filtered teachers:", filtered);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginated = filtered.slice(startIndex, endIndex);

      return {
        teachers: paginated,
        total: filtered.length,
        page,
      };
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

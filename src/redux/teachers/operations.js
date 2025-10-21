//operations



import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, child } from "firebase/database";
import {db} from "../../firebase.js"

export const getTeachersList = createAsyncThunk(
  "teachers/getTeachersList",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "/"));
      if (snapshot.exists()) {
        const teachersArray = Object.values(snapshot.val());
        return teachersArray;
      } else {
        return [];
      }
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
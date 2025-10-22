import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/slice.js";
import userReducer from "./auth/userSlice.js";
import teacherReducer from "./teachers/teachersSlice.js";
import filtersReducer from "./filters/filtersSlice.js";
// import bookTrialReducer from "./modal/bookTrialSlice.js"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user-data",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: persistedUserReducer,
    teachers: teacherReducer,
    filters: filtersReducer,
    // bookTrial: bookTrialReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

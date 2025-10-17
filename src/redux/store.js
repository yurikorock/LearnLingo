import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/slice.js"
// import bookTrialReducer from "./modal/bookTrialSlice.js"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        // bookTrial: bookTrialReducer,
    }
});

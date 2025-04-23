import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";

const store = configureStore({
  reducer: {
    genres: genreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

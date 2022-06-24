import { configureStore } from "@reduxjs/toolkit";
import seletedReducer from '../features/selected/selected_slice';

export const store = configureStore({
  reducer: {
    selected: seletedReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
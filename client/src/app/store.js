import { configureStore } from "@reduxjs/toolkit";
import { createResumeReducer } from "../pages";

export const store = configureStore({
  reducer: {
    createResume: createResumeReducer,
  },
});

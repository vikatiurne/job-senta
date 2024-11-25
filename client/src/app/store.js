import { configureStore } from "@reduxjs/toolkit";
import { createResumeReducer, homePageReducer } from "../pages";

export const store = configureStore({
  reducer: {
    createResume: createResumeReducer,
    homePage: homePageReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { createResumeReducer, homePageReducer, authReducer } from "../pages";

export const store = configureStore({
  reducer: {
    createResume: createResumeReducer,
    homePage: homePageReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

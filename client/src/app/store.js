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

store.subscribe(() => {
  localStorage.setItem('_jobseeker_auth_state', JSON.stringify(store.getState().auth));
});

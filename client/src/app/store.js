import { configureStore } from "@reduxjs/toolkit";
import {
  resumeReducer,
  homePageReducer,
  authReducer,
  homeUserReducer,
} from "../pages";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    homePage: homePageReducer,
    auth: authReducer,
    home: homeUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  localStorage.setItem(
    "_jobseeker_auth_state",
    JSON.stringify(store.getState().auth)
  );
});

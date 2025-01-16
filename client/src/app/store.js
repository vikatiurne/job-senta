import { configureStore } from "@reduxjs/toolkit";
import {
  resumeReducer,
  homePageReducer,
  authReducer,
  homeUserReducer,
  errorReducer,
} from "../pages";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    homePage: homePageReducer,
    auth: authReducer,
    home: homeUserReducer,
    error: errorReducer,
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

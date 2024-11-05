import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

const createResumeReducer = createSlice({
  name: "createResume",
  initialState,
  reducers: {
    setInfo: {
      reducer(state, { payload }) {
        state.info = payload;
      },
    },
  },
});

export const { setInfo } = createResumeReducer.actions;
export default createResumeReducer.reducer;

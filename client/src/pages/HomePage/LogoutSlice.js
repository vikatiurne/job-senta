import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resourcePage: 'builder',
};

const homePageReducer = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPage: {
      reducer(state, { payload }) {
        state.resourcePage = payload;
      },
    },
  },
});

export const { setPage } = homePageReducer.actions;
export default homePageReducer.reducer;

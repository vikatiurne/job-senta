import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import QuestionServices from "../../http/services/QuestionServices";
import { handleError } from "../errors/handleError";
import { setError } from "../errors/errorSlice";

const initialState = {
  resourcePage: "builder",
  msg: null,
  error: null,
  status: "idle",
};

export const fetchSendQuestion = createAsyncThunk(
  "homePage/fetchSendQuestion",
  async ({ email, name, question }, { dispatch, rejectWithValue }) => {
    try {
      return await QuestionServices.sendQuestion(email, name, question);
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

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
  extraReducers(builder) {
    builder
      .addCase(fetchSendQuestion.pending, (state) => {
        state.msg = null;
        state.status = "loading";
      })
      .addCase(fetchSendQuestion.fulfilled, (state, { payload }) => {
        state.msg = payload.data;
        state.status = "success";
      })
      .addCase(fetchSendQuestion.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
});

export const { setPage } = homePageReducer.actions;
export default homePageReducer.reducer;

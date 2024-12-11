import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ResumeServices from "../../../../http/services/ResumeServices";

const initialState = {
  info: {},
  status: "idle",
};

export const fetchCreateResume = createAsyncThunk(
  'resume/fetchCreateResume',
  async (values, { rejectWithValue }) => {
    try {
      const res = await ResumeServices.createResume(values);
      console.log(res)
      // return await ResumeServices.createResume(values);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchGetAllResume = createAsyncThunk(
  'resume/fetchGetAllResume',
  async ({userId, page, limit, sort}, { rejectWithValue }) => {
    try {
      const res = await ResumeServices.getAllResume(userId, page, limit, sort);
      console.log(res)
      // return await ResumeServices.createResume(values);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const resumeReducer = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setInfo: {
      reducer(state, { payload }) {
        state.info = payload;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCreateResume.pending, (state, { payload }) => {
      state.status = "loading"
    })
      .addCase(fetchCreateResume.fulfilled, (state, { payload }) => {
      state.status = "success"
    })
      .addCase(fetchCreateResume.rejected, (state, { payload }) => {
      state.status = "error"
    })
  }
});

export const { setInfo } = resumeReducer.actions;
export default resumeReducer.reducer;

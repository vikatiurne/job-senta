import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ResumeServices from "../../../../http/services/ResumeServices";

const initialState = {
  info: {},
  resumes:[],
  status: "idle",
  limit: 10,
  page: 1,
  sort: ""

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
  async ({ page, limit, sort }, { rejectWithValue }) => {
    try {
      return await ResumeServices.getAllResume(page, limit, sort);
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
    setSort: {
      reducer(state, { payload }) {
        state.sort = payload;
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
      .addCase(fetchGetAllResume.pending, (state, { payload }) => {
      state.status = "loading"
    })
      .addCase(fetchGetAllResume.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.status = "success"
        state.resumes = payload.data.rows
    })
      .addCase(fetchGetAllResume.rejected, (state, { payload }) => {
      state.status = "error"
    })
  }
});

export const { setInfo, setSort } = resumeReducer.actions;
export default resumeReducer.reducer;

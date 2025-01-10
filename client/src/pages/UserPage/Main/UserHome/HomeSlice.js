import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GoalServices from "../../../../http/services/GoalServices";

const initialState = {
  careerGoal: null,
  status: "idle",
};

export const fetchCreateGoal = createAsyncThunk(
  "home/fetchCreateGoal",
  async (values, { rejectWithValue }) => {
    try {
      return await GoalServices.createGoal(values);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGetGoal = createAsyncThunk(
  "home/fetchGetGoal",
  async (_, { rejectWithValue }) => {
    try {
      return await GoalServices.getGoal();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchUpdateGoal = createAsyncThunk(
  "home/fetchUpdateGoal",
  async (values, { rejectWithValue }) => {
    try {
      return await GoalServices.updateGoal(values);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchDeleteGoal = createAsyncThunk(
  "home/fetchDeleteGoal",
  async (_, { rejectWithValue }) => {
    try {
      return await GoalServices.deleteGoal();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const homeReduser = createSlice({
  name: "home",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCreateGoal.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchCreateGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchCreateGoal.rejected, (state, { payload }) => {
        state.status = "error";
      })
      .addCase(fetchGetGoal.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchGetGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchGetGoal.rejected, (state, { payload }) => {
        state.status = "error";
      })
      .addCase(fetchUpdateGoal.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchUpdateGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchUpdateGoal.rejected, (state, { payload }) => {
        state.status = "error";
      })
      .addCase(fetchDeleteGoal.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchDeleteGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = null;
      })
      .addCase(fetchDeleteGoal.rejected, (state, { payload }) => {
        state.status = "error";
      })
        ;
  },
});

export default homeReduser.reducer;

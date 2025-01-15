import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GoalServices from "../../../../http/services/GoalServices";
import { setError } from "../../../errors/errorSlice";

const initialState = {
  careerGoal: null,
  status: "idle",
  error: null,
};

export const fetchCreateGoal = createAsyncThunk(
  "home/fetchCreateGoal",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      return await GoalServices.createGoal(values);
    } catch (error) {
      const handledError = handledError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchGetGoal = createAsyncThunk(
  "home/fetchGetGoal",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await GoalServices.getGoal();
    } catch (error) {
      const handledError = handledError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);
export const fetchUpdateGoal = createAsyncThunk(
  "home/fetchUpdateGoal",
  async (values, { dispatch, rejectWithValue }) => {
    try {
      return await GoalServices.updateGoal(values);
    } catch (error) {
      const handledError = handledError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);
export const fetchDeleteGoal = createAsyncThunk(
  "home/fetchDeleteGoal",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await GoalServices.deleteGoal();
    } catch (error) {
      const handledError = handledError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
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
        state.error = null;
      })
      .addCase(fetchCreateGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchCreateGoal.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      })
      .addCase(fetchGetGoal.pending, (state, { payload }) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGetGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchGetGoal.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      })
      .addCase(fetchUpdateGoal.pending, (state, { payload }) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUpdateGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = payload.data;
      })
      .addCase(fetchUpdateGoal.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      })
      .addCase(fetchDeleteGoal.pending, (state, { payload }) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDeleteGoal.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.careerGoal = null;
      })
      .addCase(fetchDeleteGoal.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
});

export default homeReduser.reducer;

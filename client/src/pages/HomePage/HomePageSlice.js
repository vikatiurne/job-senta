import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuestionServices from '../../http/services/QuestionServices';

const initialState = {
  resourcePage: 'builder',
  msg: null,
  error: null,
  status: "idle"
};

export const fetchSendQuestion = createAsyncThunk(
  'homePage/fetchSendQuestion',
  async ({ email, name, question }, { rejectWithValue }) => {
    try {
      return await QuestionServices.sendQuestion(email, name, question);
    } catch (error) {
      return rejectWithValue({
        title: 'The server is unavailable. Please try again later',
        text: 'СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!',
      });
    }
  }
);

const homePageReducer = createSlice({
  name: 'homePage',
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
        state.status = 'loading';
      })
      .addCase(fetchSendQuestion.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.msg = payload.data;
        state.status = 'success';
      })
      .addCase(fetchSendQuestion.rejected, (state, {payload}) => {
        state.status = 'error';
        console.log(payload)
      });
  },
});

export const { setPage } = homePageReducer.actions;
export default homePageReducer.reducer;

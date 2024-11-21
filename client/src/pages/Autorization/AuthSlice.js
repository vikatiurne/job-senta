import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthorizationServices from "../../http/services/AuthorizationServices";

const initialState = {
  user: {},
  isAuth: false,
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await AuthorizationServices.login(email, password);
      console.log(res);
      // return await AuthServices.login(email, password);
    } catch (error) {
      // return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRegistration = createAsyncThunk(
  "auth/fetchRegistration",
  async ({ email, password, name, lastName }, { rejectWithValue }) => {
    try {
      const res = await AuthorizationServices.registration(email, password, name,lastName);
      console.log(res);
    //   console.log(email, password, name, lastName);
      // return await AuthServices.registration(email, password, name);
    } catch (error) {
      // return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.status = "success";
        if (!!payload.data.user) {
          state.isAuth = true;
          state.user = payload.data.user;
          // localStorage.setItem('token', payload.data.accessToken);
        } else {
          state.error = payload.data.message;
        }
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload.message;
      })
      .addCase(fetchRegistration.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchRegistration.fulfilled, (state, { payload }) => {
        if (!!payload.data.user) {
          state.isAuth = true;
          state.user = payload.data.user;
          localStorage.setItem("token", payload.data.accessToken);
        } else {
            console.log(payload.data.errors)
          // обрпаботать ошибку payload.data.errors
        }
      })
      .addCase(fetchRegistration.rejected, (state, { payload }) => {
        // обрпаботать ошибку payload.errors
      });
    // .addCase(fetchLogout.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchLogout.fulfilled, (state) => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('location');
    //   state.status = 'success';
    //   state.error = null;
    //   state.isAuth = false;
    //   state.isLogout = true;
    //   state.user = {};
    // })
    // .addCase(fetchLogout.rejected, (state) => {
    //   state.status = 'error';
    // })
    // .addCase(fetchAutoLogin.pending, (state) => {
    //   state.status = 'loading';
    //   state.error = null;
    // })
    // .addCase(fetchAutoLogin.fulfilled, (state, { payload }) => {
    //   state.status = 'success';
    //   state.user = payload.data.user;
    //   state.error = payload.message;
    //   state.isAuth = true;
    //   localStorage.setItem('token', payload.data.accessToken);
    // })
    // .addCase(fetchAutoLogin.rejected, (state) => {
    //   state.status = 'error';
    // })
    // .addCase(fetchForgotPassword.pending, (state) => {
    //   state.status = 'loading';
    //   state.error = null;
    // })
    // .addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
    //   state.error = payload.data.message;
    // })
    // .addCase(fetchForgotPassword.rejected, (state, { payload }) => {
    //   state.status = 'error';
    //   state.msg = payload.message;
    // })
    // .addCase(fetchResetPassword.pending, (state) => {
    //   state.status = 'loading';
    //   state.error = null;
    // })
    // .addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
    //   state.status = 'success';
    //   state.msg = payload.data.message;
    // })
    // .addCase(fetchResetPassword.rejected, (state, { payload }) => {
    //   state.status = 'error';
    //   state.error = payload.message;
    // })
    // .addCase(fetchGetGoogleUser.pending, (state) => {
    //   state.status = 'loading';
    //   state.error = null;
    // })
    // .addCase(fetchGetGoogleUser.fulfilled, (state, { payload }) => {
    //   state.status = 'success';
    //   state.user = payload.data.user;
    //   localStorage.setItem('token', payload.data.accessToken);
    //   state.isAuth = true;
    //   state.prevLocation = localStorage.getItem('location');
    //   localStorage.removeItem('location');
    // })
    // .addCase(fetchGetGoogleUser.rejected, (state, { payload }) => {
    //   console.log(payload);
    //   state.status = 'error';
    //   // state.error = payload.message
    // })
  },
});

export const { getLocation } = authSlice.actions;
export default authSlice.reducer;

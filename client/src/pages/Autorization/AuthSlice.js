import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthorizationServices from "../../http/services/AuthorizationServices";

const initialState = {
  user: {},
  isAuth: false,
};

export const fetchRegistration = createAsyncThunk(
  "auth/fetchRegistration",
  async ({ email, password, name, lastName }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.registration(
        email,
        password,
        name,
        lastName
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.login(email, password);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {
  return await AuthorizationServices.logout();
});

export const fetchAutoLogin = createAsyncThunk(
  'auth/fetchAutoLogin',
  async () => await AuthorizationServices.autoLogin()
);

export const fetchForgotPassword = createAsyncThunk(
  'auth/fetchForgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.forgotPassword(email);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchResetPassword = createAsyncThunk(
  'auth/fetchResetPassword',
  async ({ newPass, resetLink }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.resetPassword(newPass, resetLink);
    } catch (error) {
      return rejectWithValue(error.response.data);
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
          localStorage.setItem("token_jobseeker", payload.data.accessToken);
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
          localStorage.setItem("token_jobseeker", payload.data.accessToken);
        } else {
          console.log(payload.data.errors);
          // обрпаботать ошибку payload.data.errors
        }
      })
      .addCase(fetchRegistration.rejected, (state, { payload }) => {
        // обрпаботать ошибку payload.errors
      })
    .addCase(fetchLogout.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchLogout.fulfilled, (state) => {
      localStorage.removeItem('token_jobseeker');
      state.status = 'success';
      state.error = null;
      state.isAuth = false;
      state.user = {};
    })
    .addCase(fetchLogout.rejected, (state) => {
      state.status = 'error';
    })
    .addCase(fetchAutoLogin.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchAutoLogin.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.user = payload.data.user;
      state.error = payload.message;
      state.isAuth = true;
      localStorage.setItem('token_jobseeker', payload.data.accessToken);
    })
    .addCase(fetchAutoLogin.rejected, (state) => {
      state.status = 'error';
    })
    .addCase(fetchForgotPassword.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
      state.error = payload.data.message;
    })
    .addCase(fetchForgotPassword.rejected, (state, { payload }) => {
      state.status = 'error';
    })
    .addCase(fetchResetPassword.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.status = 'success';
    })
    .addCase(fetchResetPassword.rejected, (state, { payload }) => {
      state.status = 'error';
      state.error = payload.message;
    })
  },
});

export const { getLocation } = authSlice.actions;
export default authSlice.reducer;

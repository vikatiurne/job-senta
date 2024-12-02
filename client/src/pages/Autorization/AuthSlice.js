import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthorizationServices from "../../http/services/AuthorizationServices";

const initialState = {
  user: {},
  isAuth: false,
  isRemember: false,
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
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLogout = createAsyncThunk("auth/fetchLogout", async () => {
  return await AuthorizationServices.logout();
});

export const fetchAutoLogin = createAsyncThunk(
  "auth/fetchAutoLogin",
  async (_, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.autoLogin();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchForgotPassword = createAsyncThunk(
  "auth/fetchForgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.forgotPassword(email);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchResetPassword = createAsyncThunk(
  "auth/fetchResetPassword",
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
  reducers: {
    setRememberMe: (state, action) => {
      state.isRemember = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchRegistration.fulfilled, (state, { payload }) => {
        if (!!payload.data.user) {
          // state.isAuth = true;
          localStorage.setItem("_jobseeker", payload.data.accessToken);
          state.user = payload.data.user;
        } else {
          console.log(payload.data.errors);
          // обработать ошибку payload.data.errors
        }
      })
      .addCase(fetchRegistration.rejected, (state, { payload }) => {
        console.log(payload);
        // обрпаботать ошибку payload.errors
      })
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "success";
        if (!!payload.data.user) {
          state.isAuth = true;
          state.user = payload.data.user;
          state.isRemember
            ? localStorage.setItem("_jobseeker", payload.data.accessToken)
            : sessionStorage.setItem("_jobseeker", payload.data.accessToken);
        } else {
          state.error = payload.data.message;
        }
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        console.log(payload);
        state.status = "error";
        state.error = payload.message;
      })
      .addCase(fetchLogout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.status = "success";
        state.error = null;
        state.isAuth = false;
        state.user = {};
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchAutoLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAutoLogin.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload.data.user;
        state.error = payload.message;
        state.isAuth = true;
        localStorage.setItem("_jobseeker", payload.data.user.accessToken);
      })
      .addCase(fetchAutoLogin.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.status = "error";
      })
      .addCase(fetchForgotPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
        state.error = payload.data.message;
      })
      .addCase(fetchForgotPassword.rejected, (state, { payload }) => {
        state.status = "error";
      })
      .addCase(fetchResetPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.msg = payload.data.message;
      })
      .addCase(fetchResetPassword.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload.message;
      });
  },
});

export const { setRememberMe } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthorizationServices from "../../http/services/AuthorizationServices";

const initialState = {
  user: {},
  isAuth: false,
  isRemember: false,
  error: null,
  methodAuth: null,
  status: "idle",
  msg: null,
};

export const fetchRegistration = createAsyncThunk(
  "auth/fetchRegistration",
  async ({ email, password, username, lastName }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.registration(
        email,
        password,
        username,
        lastName
      );
    } catch (error) {
      return rejectWithValue({
        title: "The server is unavailable. Please try again later",
        text: "СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!",
      });
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

export const fetchSocialAuth = createAsyncThunk(
  "auth/fetchSocialAuth",
  async (_, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.socialAuth();
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        title: "The server is unavailable. Please try again later",
        text: "СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!",
      });
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "auth/fetchLogout",
  async (_, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.logout();
    } catch (error) {
      return rejectWithValue({
        title: "The server is unavailable. Please try again later",
        text: "СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!",
      });
    }
  }
);

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
      return rejectWithValue({
        title: "Unknown Error",
        text: "СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!",
      });
    }
  }
);

export const fetchResetPassword = createAsyncThunk(
  "auth/fetchResetPassword",
  async ({ newPass, resetLink }, { rejectWithValue }) => {
    try {
      return await AuthorizationServices.resetPassword(newPass, resetLink);
    } catch (error) {
      return rejectWithValue({
        title: "Unknown Error",
        text: "СЮДА НУЖНО НАПИСАТЬ ТЕКСТ!!!",
      });
    }
  }
);

const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("_jobseeker_auth_state");
  return savedState ? JSON.parse(savedState) : initialState;
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadStateFromLocalStorage(),
  reducers: {
    setRememberMe: (state, { payload }) => {
      state.isRemember = payload;
    },
    setMethodAuth: (state, { payload }) => {
      state.methodAuth = payload;
      state.isAuth = true;
    },
    resetAuthState: (state) => {
      console.log("Resetting auth state");
      if (!state.isRemember && state.methodAuth === "app") {
        state.user = {};
        state.isAuth = false;
        state.isRemember = false;
        state.error = null;
        state.methodAuth = null;
        state.status = "idle";
        state.msg = null;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchRegistration.fulfilled, (state, { payload }) => {
        localStorage.setItem("_jobseeker", payload.data.accessToken);
        state.user = payload.data.user;
        state.error = payload.data?.message;
        state.status = "success";
      })
      .addCase(fetchRegistration.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "success";
        state.isAuth = true;
        state.methodAuth = "app";
        state.isRemember
          ? localStorage.setItem("_jobseeker", payload.data.accessToken)
          : sessionStorage.setItem("_jobseeker", payload.data.accessToken);
        state.user = payload.data;
        state.error = payload.data?.message;
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        console.log(payload);
        state.error = payload?.message;
        state.status = "error";
      })
      .addCase(fetchSocialAuth.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchSocialAuth.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "success";
        localStorage.setItem("_jobseeker", payload.data.accessToken);
        state.user = payload.data;
        state.error = payload.data?.message;
      })
      .addCase(fetchSocialAuth.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      .addCase(fetchLogout.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        localStorage.removeItem("_jobseeker_auth_state");
        localStorage.removeItem("_jobseeker");
        sessionStorage.removeItem("_jobseeker");
        state.isAuth = false;
        state.user = {};
        state.error = null;
        state.status = "success";
      })
      .addCase(fetchLogout.rejected, (state, { payload }) => {
        console.log(payload);
        state.status = "error";
        state.error = payload;
      })
      .addCase(fetchAutoLogin.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchAutoLogin.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.user = payload.data;
        state.status = "success";
        localStorage.setItem("_jobseeker", payload.data.accessToken);
      })
      .addCase(fetchAutoLogin.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      .addCase(fetchForgotPassword.pending, (state) => {
        state.msg = null;
        state.status = "loading";
      })
      .addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.msg = payload.data;
        state.status = "success";
      })
      .addCase(fetchForgotPassword.rejected, (state, { payload }) => {
        console.log(payload);
        state.msg = payload;
        state.status = "error";
      })
      .addCase(fetchResetPassword.pending, (state) => {
        state.msg = null;
        state.status = "loading";
      })
      .addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.msg = payload.data;
        state.status = "success";
      })
      .addCase(fetchResetPassword.rejected, (state, { payload }) => {
        console.log(payload);
        state.msg = payload;
        state.status = "error";
      });
  },
});

export const { setRememberMe, setMethodAuth, resetAuthState } =
  authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthorizationServices from "../../http/services/AuthorizationServices";
import { setError } from "../errors/errorSlice";
import { handleError } from "../errors/handleError";

const initialState = {
  user: {},
  isAuth: false,
  isRemember: false,
  error: null,
  methodAuth: null,
  status: "idle",
  msg: null,
  // isServerConnect: false,
};

export const fetchRegistration = createAsyncThunk(
  "auth/fetchRegistration",
  async (
    { email, password, username, lastName },
    { dispatch, rejectWithValue }
  ) => {
    try {
      return await AuthorizationServices.registration(
        email,
        password,
        username,
        lastName
      );
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.login(email, password);
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchSocialAuth = createAsyncThunk(
  "auth/fetchSocialAuth",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.socialAuth();
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "auth/fetchLogout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.logout();
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchAutoLogin = createAsyncThunk(
  "auth/fetchAutoLogin",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.autoLogin();
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchForgotPassword = createAsyncThunk(
  "auth/fetchForgotPassword",
  async ({ email }, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.forgotPassword(email);
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
    }
  }
);

export const fetchResetPassword = createAsyncThunk(
  "auth/fetchResetPassword",
  async ({ newPass, resetLink }, { dispatch, rejectWithValue }) => {
    try {
      return await AuthorizationServices.resetPassword(newPass, resetLink);
    } catch (error) {
      const handledError = handleError(error);
      dispatch(setError(handledError));
      return rejectWithValue(handledError);
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
    },
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    resetAuthState: (state) => {
      if (!state.isRemember) {
        localStorage.removeItem("_jobseeker");
        sessionStorage.removeItem("_jobseeker");
        state.user = {};
        state.isRemember = false;
        state.isAuth = false;
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
        state.user = payload.data.user;
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
        state.status = "success";
        state.methodAuth = "app";
        state.isRemember
          ? localStorage.setItem("_jobseeker", payload.data.accessToken)
          : sessionStorage.setItem("_jobseeker", payload.data.accessToken);
        state.user = payload.data;
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      .addCase(fetchSocialAuth.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchSocialAuth.fulfilled, (state, { payload }) => {
        state.status = "success";
        localStorage.setItem("_jobseeker", payload.data.accessToken);
        state.user = payload.data;
        state.methodAuth = "app";
        state.isRemember = true;
        state.isAuth = true
      })
      .addCase(fetchSocialAuth.rejected, (state, { payload }) => {
        state.error = payload;
        state.isAuth = false;
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
        state.status = "idle";
        state.methodAuth = null;
        state.msg = null;
      })
      .addCase(fetchLogout.rejected, (state, { payload }) => {
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
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchForgotPassword.fulfilled, (state, { payload }) => {
        state.msg = payload.data;
        state.status = "success";
      })
      .addCase(fetchForgotPassword.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      .addCase(fetchResetPassword.pending, (state) => {
        state.msg = null;
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
        state.msg = payload.data;
        state.status = "success";
      })
      .addCase(fetchResetPassword.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      })
      
  },
});

export const { setRememberMe, setMethodAuth, resetAuthState, setAuth } =
  authSlice.actions;
export default authSlice.reducer;

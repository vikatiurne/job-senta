import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ResumeServices from "../../../../http/services/ResumeServices";

const initialState = {
  info: {},
  // resumes: [{}],
  archiveResumes: [{}],
  activeResumes: [{}],
  
  status: "idle",
  getonestatus: "idle",
  getallstatus: "idle",
  limit: 10,
  page: 1,
  sort: "",
  resumesCount: null,
  archiveCount: null,
  activeCount:null,
  checkedResumes: [],
  isShowArchive: false,
  searchText: "",
};

export const fetchCreateResume = createAsyncThunk(
  "resume/fetchCreateResume",
  async (values, { rejectWithValue }) => {
    try {
      return await ResumeServices.createResume(values);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchGetAllResume = createAsyncThunk(
  "resume/fetchGetAllResume",
  async (
    { page, limit, sort, isArchive, isFavorite, searchText },
    { rejectWithValue }
  ) => {
    try {
      return await ResumeServices.getAllResume(
        page,
        limit,
        sort,
        isArchive,
        isFavorite,
        searchText
      );
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchGetOneResume = createAsyncThunk(
  "resume/fetchGetOneResume",
  async (resumeId, { rejectWithValue }) => {
    try {
      return await ResumeServices.getOneResume(resumeId);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchUpdateResume = createAsyncThunk(
  "resume/fetchUpdateResume",
  async ({ resumeId, values }, { rejectWithValue }) => {
    try {
      return await ResumeServices.updateResume(resumeId, values);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchDeleteOneResume = createAsyncThunk(
  "resume/fetchDeleteOneResume",
  async (resumeId, { rejectWithValue }) => {
    try {
      return await ResumeServices.deleteOneResume(resumeId);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchDeleteSeveralResume = createAsyncThunk(
  "resume/fetchDeleteSeveralResume",
  async (resumeIds, { rejectWithValue }) => {
    try {
      return await ResumeServices.deleteSeveralResume(resumeIds);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchCloneResume = createAsyncThunk(
  "resume/fetchCloneResume",
  async (resumeId, { rejectWithValue }) => {
    try {
      return await ResumeServices.cloneResume(resumeId);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchArchiveOneResume = createAsyncThunk(
  "resume/fetchArchiveOneResume",
  async ({ resumeId, isArchive }, { rejectWithValue }) => {
    console.log(resumeId, isArchive);
    try {
      return await ResumeServices.archiveOneResume(resumeId, isArchive);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchArchiveSeveralResume = createAsyncThunk(
  "resume/fetchArchiveSeveralResume",
  async ({ resumeIds, isArchive }, { rejectWithValue }) => {
    console.log(resumeIds, isArchive);
    try {
      return await ResumeServices.archiveSeveralResume(resumeIds, isArchive);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchFavoriteResume = createAsyncThunk(
  "resume/fetchFavoriteResume",
  async ({ resumeId, isFavorite }, { rejectWithValue }) => {
    console.log(resumeId, isFavorite);
    try {
      return await ResumeServices.favoriteResume(resumeId, isFavorite);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUploadDocOrPdf = createAsyncThunk(
  "resume/fetchUploadDocOrPdf",
  async ({ formData, config }, { rejectWithValue }) => {
    console.log(formData);
    try {
      const response = await ResumeServices.uploadDocOrPdf(formData, config);
      return response
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
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
    setLimit: {
      reducer(state, { payload }) {
        state.limit = payload;
      },
    },
    setPage: {
      reducer(state, { payload }) {
        state.page = payload;
      },
    },
    setCheckedResumes: {
      reducer(state, { payload }) {
        state.checkedResumes = payload;
      },
    },
    setIsArciveResumes: {
      reducer(state, { payload }) {
        state.isShowArchive = payload;
      },
    },
    setSearch: {
      reducer(state, { payload }) {
        state.searchText = payload;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCreateResume.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchCreateResume.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.info = payload.data;
      })
      .addCase(fetchCreateResume.rejected, (state, { payload }) => {
        state.status = "error";
      })
      .addCase(fetchGetAllResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
        localStorage.removeItem("_jobseeker_resume_isedit");
      })
      .addCase(fetchGetAllResume.fulfilled, (state, { payload }) => {
        console.log("wwrwe",payload)
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.archiveResumes = payload.data.archiveResumes.rows;
        state.archiveCount = payload.data.archiveResumes.count;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchGetAllResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchGetOneResume.pending, (state, { payload }) => {
        state.getonestatus = "loading";
      })
      .addCase(fetchGetOneResume.fulfilled, (state, { payload }) => {
        state.getonestatus = "success";
        state.info = payload.data;
      })
      .addCase(fetchGetOneResume.rejected, (state, { payload }) => {
        state.getonestatus = "error";
      })
      .addCase(fetchUpdateResume.pending, (state, { payload }) => {
        state.getonestatus = "loading";
      })
      .addCase(fetchUpdateResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getonestatus = "success";
        state.info = payload.data;
        localStorage.removeItem("_jobseeker_resume_isedit");
      })
      .addCase(fetchUpdateResume.rejected, (state, { payload }) => {
        state.getonestatus = "error";
      })
      .addCase(fetchDeleteOneResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchDeleteOneResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.archiveResumes = payload.data.archiveResumes.rows;
        state.archiveCount = payload.data.archiveResumes.count;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchDeleteOneResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchDeleteSeveralResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchDeleteSeveralResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.archiveResumes = payload.data.archiveResumes.rows;
        state.archiveCount = payload.data.archiveResumes.count;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchDeleteSeveralResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchCloneResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchCloneResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchCloneResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchArchiveOneResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchArchiveOneResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.archiveResumes = payload.data.archiveResumes.rows;
        state.archiveCount = payload.data.archiveResumes.count;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchArchiveOneResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchArchiveSeveralResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchArchiveSeveralResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.archiveResumes = payload.data.archiveResumes.rows;
        state.archiveCount = payload.data.archiveResumes.count;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchArchiveSeveralResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchFavoriteResume.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchFavoriteResume.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        
      })
      .addCase(fetchFavoriteResume.rejected, (state, { payload }) => {
        state.getallstatus = "error";
      })
      .addCase(fetchUploadDocOrPdf.pending, (state, { payload }) => {
        state.getallstatus = "loading";
      })
      .addCase(fetchUploadDocOrPdf.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "success";
        state.activeResumes = payload.data.activeResumes.rows;
        state.activeCount = payload.data.activeResumes.count;
      })
      .addCase(fetchUploadDocOrPdf.rejected, (state, { payload }) => {
        console.log(payload);
        state.getallstatus = "error";
        state.error = payload.message;
      });
  },
});

export const {
  setInfo,
  setSort,
  setLimit,
  setPage,
  setCheckedResumes,
  setIsArciveResumes,
  setSearch,
} = resumeReducer.actions;
export default resumeReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desiredPosition: "",
  phone: "",
  email: "",
  LinkedIn: "",
  professionalSummary: "",
  projectName: [],
  role: "",
  projectLink: "",
  companyName: "",
  position: "",
  responsibilities: "",
  educName: "",
  specialty: "",
  certificateName: "",
  institution: "",
  nameAward: "",
  institutionAward: "",
  merit: "",
  voluntering: "",
  obligations: "",
  publication: "",
  publicationLink: "",
  interests: "",
  info: {},
};

const createResumeReducer = createSlice({
  name: "createResume",
  initialState,
  reducers: {
    setPosition: {
      reducer(state, { payload }) {
        state.desiredPosition = payload;
      },
    },
    setProject: {
      reducer(state, { payload }) {
        state.projectName.push(payload);
      },
    },
    setInfo: {
      reducer(state, { payload }) {
        state.info = payload;
      },
    },
  },
});

export const { setPosition, setProject } = createResumeReducer.actions;
export default createResumeReducer.reducer;

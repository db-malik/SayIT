// ExampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textSummary: "This is a summary of the text",
  loading: false,
  error: null,
};

const textSummarySlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTextSummary: (state, action) => {
      state.textSummary = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTextSummary, setLoading, setError } = textSummarySlice.actions;

export default textSummarySlice.reducer;

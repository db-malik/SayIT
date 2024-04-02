// ExampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textTranslated: "This is a text translation",
  languages: [],
  loading: false,
  error: null,
};

const textTranslationSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTextTranslated: (state, action) => {
      state.textTranslated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTextTranslated, setLoading, setError } = textTranslationSlice.actions;

export default textTranslationSlice.reducer;

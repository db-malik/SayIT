// ExampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textTranslation: "This is a text translation",
  loading: false,
  error: null,
};

const textTranslationSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTextTranslation: (state, action) => {
      state.textTranslation = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTextTranslation, setLoading, setError } = textTranslationSlice.actions;

export default textTranslationSlice.reducer;

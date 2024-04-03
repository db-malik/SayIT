// ExampleSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textTranslated: 'This is a text translation',
  loading: false,
  error: null,
  translateToLanguges: null,
  translateFromLanguges: null,
}

const textTranslationSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTextTranslated: (state, action) => {
      state.textTranslated = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setTranslateToLanguges: (state, action) => {
      state.translateToLanguges = action.payload
    },
    setTranslateFromLanguges: (state, action) => {
      state.translateFromLanguges = action.payload
    },
  },
})

export const { setTextTranslated, setLoading, setError, setTranslateToLanguges, setTranslateFromLanguges } = textTranslationSlice.actions

export default textTranslationSlice.reducer

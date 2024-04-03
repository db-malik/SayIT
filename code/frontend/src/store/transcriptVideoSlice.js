// ExampleSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transcriptVideo: 'This is a video transcription',
  loadingVideo: false,
  error: null,

}

const transcriptVideoSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTranscriptVideo: (state, action) => {
      state.transcriptVideo = action.payload
    },
    setLoadingVideo: (state, action) => {
      state.loadingVideo = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setTranscriptVideo, setLoadingVideo, setError } = transcriptVideoSlice.actions

export default transcriptVideoSlice.reducer

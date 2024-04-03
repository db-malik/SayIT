// ExampleService.js
import axios from 'axios'
import { setTextSummary, setLoading as setTextSammuryLoading, setError as setTextSammuryError } from '../store/textSummarySlice' // Import actions from slice
import { setTextTranslated, setLoading as setTextTranslationLoading, setError as setTextTranslationeError } from 'store/textTranslationSlice'
import { setTranscriptVideo, setLoadingVideo, setError as setTranscriptVideoError } from 'store/transcriptVideoSlice'

export const fetchTextSummary = (textData) => async (dispatch) => {
  dispatch(setTextSammuryLoading(true))
  try {
    const response = await axios.post('http://localhost:8000/model_ml/text_summarisation', null, {
      params: {
        text: textData,
      },
    })
    console.log(response.data.result)
    dispatch(setTextSummary(response.data.result))
  } catch (error) {
    dispatch(setTextSammuryError(error.message))
  } finally {
    dispatch(setTextSammuryLoading(false))
  }
}

export const fetchTextTranslation = (textData, toLanguages, fromLanguage) => async (dispatch) => {
  dispatch(setTextTranslationLoading(true))
  try {
    const response = await axios.post('http://localhost:8000/model_ml/text_translation', null, {
      params: {
        document: textData,
        fromlanguage: '',
        tolanguages: toLanguages,
      },
    })
    console.log(response.data.result)
    dispatch(setTextTranslated(response.data.result))
  } catch (error) {
    dispatch(setTextTranslationeError(error.message))
  } finally {
    dispatch(setTextTranslationLoading(false))
  }
}

export const fetchVideoTranscription = () => async (dispatch) => {
  dispatch(setLoadingVideo(true))
  try {
    const response = await axios.post('http://localhost:8000/model_ml/video_transcription')
    console.log(response.data.result)
    dispatch(setTranscriptVideo(response.data.result))
  } catch (error) {
    dispatch(setTranscriptVideoError(error.message))
  } finally {
    dispatch(setLoadingVideo(false))
  }
}

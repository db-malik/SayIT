// ExampleService.js
import axios from 'axios';
import { setTextSummary, setLoading as setTextSammuryLoading, setError as  setTextSammuryError} from '../store/textSummarySlice'; // Import actions from slice
import { setTextTranslated, setLoading as setTextTranslationLoading, setError as setTextTranslationeError } from "store/textTranslationSlice";

export const fetchTextSummary = (textData) => async (dispatch) => {
  dispatch(setTextSammuryLoading(true));
  try {
    const response = await axios.post('http://localhost:8000/model_ml/text_summarisation', null, {
      params: {
        text: textData,
      },
    });
    console.log(response.data.result);
    dispatch(setTextSummary(response.data.result));
  } catch (error) {
    dispatch(setTextSammuryError(error.message));
  } finally {
    dispatch(setTextSammuryLoading(false));
  }
};



export const fetchTextTranslation = (textData, fromLanguage, toLanguages) => async (dispatch) => {
  dispatch(setTextTranslationLoading(true));
  try {
    const response = await axios.post('http://localhost:8000/model_ml/text_translation', null, {
      params: {
        document: textData,
        fromlanguage : 'fr',
        tolanguages : 'en'

      },
    });
    console.log(response.data.result);
    dispatch(setTextTranslated(response.data.result));
  } catch (error) {
    dispatch(setTextTranslationeError(error.message));
  } finally {
    dispatch(setTextTranslationLoading(false));
  }
};
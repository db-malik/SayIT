// ExampleService.js
import axios from 'axios';
import { setTextSummary, setLoading, setError } from '../store/textSummarySlice'; // Import actions from slice

export const fetchTextSummary = (textData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post('http://localhost:8000/model_ml/textsummarisation', null, {
      params: {
        text: textData,
      },
    });
    console.log(response.data.result);
    dispatch(setTextSummary(response.data.result));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

import { combineReducers } from 'redux';
import textSummarySlice from './textSummarySlice'; // Import your example slice reducer
import textTranslation from './textTranslationSlice'; // Import your example slice reducer
import transcriptVideoSlice from './transcriptVideoSlice'; // Import your example slice reducer

const rootReducer = combineReducers({
  textSummarySlice: textSummarySlice,
  textTranslation: textTranslation,
  transcriptVideoSlice: transcriptVideoSlice,
  // Add other reducers here
});

export default rootReducer;

import { combineReducers } from 'redux';
import textSummarySlice from './textSummarySlice'; // Import your example slice reducer
import textTranslation from './textTranslationSlice'; // Import your example slice reducer

const rootReducer = combineReducers({
  textSummarySlice: textSummarySlice,
  textTranslation: textTranslation,
  // Add other reducers here
});

export default rootReducer;

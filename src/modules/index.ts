import { combineReducers } from 'redux';
import autosizeInput from './autosizeInput';

const rootReducer = combineReducers({
  autosizeInput,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { AutosizeInputState, AutosizeInputAction } from './types';
import { createReducer } from 'typesafe-actions';
import { CHANGE_VALUE, CHANGE_WIDTH } from './actions';

const initialState: AutosizeInputState = {
  value: '',
  inputWidth: 1,
};

const AutosizeInput = createReducer<AutosizeInputState, AutosizeInputAction>(initialState, {
  [CHANGE_VALUE]: (state, action) => {
    return {
      ...state,
      value: action.payload,
    };
  },
  [CHANGE_WIDTH]: (state, action) => {
    return {
      ...state,
      inputWidth: action.payload,
    };
  },
});

export default AutosizeInput;

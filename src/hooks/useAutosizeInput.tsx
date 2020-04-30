import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { changeValue, changeWidth } from '../modules/autosizeInput';

export default function useAutosizeInput() {
  const AutosizeInputState = useSelector((state: RootState) => state.autosizeInput);
  const dispatch = useDispatch();

  const onChangeValue = useCallback((value) => dispatch(changeValue(value)), [dispatch]);
  const onChangeWidth = useCallback((width) => dispatch(changeWidth(width)), [dispatch]);

  return {
    AutosizeInputState,
    onChangeValue,
    onChangeWidth,
  };
}

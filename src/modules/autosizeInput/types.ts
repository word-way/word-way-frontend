import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AutosizeInputAction = ActionType<typeof actions>;

export interface AutosizeInputState {
  value: string;
  inputWidth: number;
}

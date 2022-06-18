import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getSelectedPagination = (state: State): number => state[NameSpace.SelectedPagination].selectedPagination;

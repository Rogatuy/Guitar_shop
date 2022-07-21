import { NameSpace } from '../../const';
import { MainSort, State } from '../../types/state';

export const getSortParams = (state: State): MainSort => state[NameSpace.MainSort];

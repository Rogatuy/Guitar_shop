import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getServerStatus = (state: State): boolean => state[NameSpace.ServerStatus].status;

import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getGuitarsBySearch = ((state: State) => state[NameSpace.MainSearch].guitarsBySearch);

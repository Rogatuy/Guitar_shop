import { NameSpace } from '../../const';
import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';


export const getGuitarFull = (state: State): Guitar => state[NameSpace.GuitarFullData].guitarFull;
export const getGuitarFullLoadedDataStatus = (state: State): boolean => state[NameSpace.GuitarFullData].isDataLoaded;

import { NameSpace } from '../../const';
import { Guitars } from '../../types/guitar';
import { State } from '../../types/state';


export const getGuitarsList = (state: State): Guitars => state[NameSpace.GuitarsData].guitars;
export const getGuitarsLoadedDataStatus = (state: State): boolean => state[NameSpace.GuitarsData].isDataLoaded;

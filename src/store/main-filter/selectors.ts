
import { GuitarType, NameSpace, stringCountByType } from '../../const';
import { State } from '../../types/state';

export const getDisabledStrings = ((state: State) => {
  let enabledStrings: string[] = [];
  if (state[NameSpace.MainFilter].guitarsTypes.includes(GuitarType.Acoustic)) {
    enabledStrings = [...enabledStrings, ...stringCountByType.Acoustic];
  }
  if (state[NameSpace.MainFilter].guitarsTypes.includes(GuitarType.Electric)) {
    enabledStrings = [...enabledStrings, ...stringCountByType.Electric];
  }
  if (state[NameSpace.MainFilter].guitarsTypes.includes(GuitarType.Ukulele)) {
    enabledStrings = [...enabledStrings, ...stringCountByType.Ukulele];
  }
  if (state[NameSpace.MainFilter].guitarsTypes.length === 0) {
    enabledStrings = stringCountByType.Default;
  }

  enabledStrings = [...new Set(enabledStrings)];
  const disabledStrings = stringCountByType.Default.filter((item) => !enabledStrings.includes(item));
  return disabledStrings;
});

export const getGuitarsMinPrice = (state: State) => state[NameSpace.MainFilter].minPriceAvailable;

export const getGuitarsMaxPrice = (state: State) => state[NameSpace.MainFilter].maxPriceAvailable;

export const getTypeFilters = ((state: State) => state[NameSpace.MainFilter].guitarsTypes);

export const getPriceFilters = ((state: State) => state[NameSpace.MainFilter].priceSearch);

export const getStringFilters = ((state: State) => state[NameSpace.MainFilter].stringCount);

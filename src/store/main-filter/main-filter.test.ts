import { MainFilter } from '../../types/state';
import { addGuitarTypeFilter, mainFilter } from './main-filter';

const filterInitialState: MainFilter = {
  guitarsTypes: [],
  priceSearch: {
    min: null,
    max: null,
  },
  stringCount: [],
  minPriceAvailable: 0,
  maxPriceAvailable: 0,
};

const stateUpdate: MainFilter = {
  guitarsTypes: ['ukulele'],
  priceSearch: {
    min: null,
    max: null,
  },
  stringCount: [],
  minPriceAvailable: 0,
  maxPriceAvailable: 0,
};

describe('Reducer: MainFilter', () => {
  it('without additional parametrs should return initial state', () => {
    expect(mainFilter.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(filterInitialState);
  });

  it('should update MainFilter by add type filter', () => {
    const state = filterInitialState;
    expect(mainFilter.reducer(state, addGuitarTypeFilter(stateUpdate.guitarsTypes)))
      .toEqual(stateUpdate);
  });
});

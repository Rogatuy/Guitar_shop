import { MainSearch } from '../../types/state';
import { makeFakeGuitars } from '../../utils/mocks';
import { loadGuitarsBySearch, mainSearch } from './main-search';


const searchInitialState: MainSearch = {
  guitarsBySearch: [],
};

const guitars = makeFakeGuitars();

describe('Reducer: MainSearch', () => {
  it('without additional parametrs should return initial state', () => {
    expect(mainSearch.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(searchInitialState);
  });

  it('should update MainSearch by add guitars', () => {
    const state = searchInitialState;
    expect(mainSearch.reducer(state, loadGuitarsBySearch(guitars)))
      .toEqual({guitarsBySearch: guitars});
  });
});

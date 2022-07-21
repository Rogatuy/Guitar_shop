import { SortOrder, SortType } from '../../const';
import { MainSort } from '../../types/state';
import { mainSort, updateSortType } from './main-sort';


const sortInitialState: MainSort = {
  sortType: SortType.Default,
  sortOrder: SortOrder.Default,
};

const stateUpdate: MainSort ={
  sortType: SortType.Price,
  sortOrder: SortOrder.Default,
};

describe('Reducer: MainSort', () => {
  it('without additional parametrs should return initial state', () => {
    expect(mainSort.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(sortInitialState);
  });

  it('should update MainSort by add type filter', () => {
    const state = sortInitialState;
    expect(mainSort.reducer(state, updateSortType(stateUpdate.sortType)))
      .toEqual(stateUpdate);
  });
});

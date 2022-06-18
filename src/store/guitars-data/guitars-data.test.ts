import { makeFakeGuitars } from '../../utils/mocks';
import { guitarsData, loadGuitars } from './guitars-data';

const guitars = makeFakeGuitars();


describe('Reducer: guitarsData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(guitarsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({guitars: [], isDataLoaded: false});
  });

  it('should update guitars by load guitars', () => {
    const state = {guitars: [], isDataLoaded: false};
    expect(guitarsData.reducer(state, loadGuitars(guitars)))
      .toEqual({guitars: guitars, isDataLoaded: true});
  });
});

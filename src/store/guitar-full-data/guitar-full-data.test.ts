import { makeFakeGuitar } from '../../utils/mocks';
import { guitarFullData, loadGuitarFull } from './guitar-full-data';

const guitar = makeFakeGuitar();
const guitarInitialState = {
  id: 0,
  name: '',
  vendorCode: '',
  type: '',
  description: '',
  previewImg: '',
  stringCount: 0,
  rating: 0,
  price: 0,
  comments: [],
};


describe('Reducer: guitarFullData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(guitarFullData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({guitarFull: guitarInitialState, isDataLoaded: false});
  });

  it('should update guitarFull by load guitarFull', () => {
    const state = {guitarFull: guitarInitialState, isDataLoaded: false};
    expect(guitarFullData.reducer(state, loadGuitarFull(guitar)))
      .toEqual({guitarFull: guitar, isDataLoaded: true});
  });
});

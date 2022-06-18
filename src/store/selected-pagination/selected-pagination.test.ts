import { changePagination, selectedPagination } from './selected-pagination';


describe('Reducer: selectedPagination', () => {
  it('without additional parametrs should return initial state', () => {
    expect(selectedPagination.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({selectedPagination: 1});
  });

  it('should update newPagination by load pagination', () => {
    const newPagination = 2;
    expect(selectedPagination.reducer({selectedPagination: 1}, changePagination(newPagination)))
      .toEqual({selectedPagination: newPagination});
  });
});

import { serverStatusData } from './server-status';

describe('Reducer: serverStatusData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(serverStatusData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({status: true});
  });
});

import { reviewSendStatus, reviewSendStatusData } from './review-send-status';

describe('Reducer: reviewSendStatusData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(reviewSendStatusData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({reviewSendStatus: 'initial'});
  });

  it('should update newStatus by load status', () => {
    expect(reviewSendStatusData.reducer({reviewSendStatus: 'initial'}, reviewSendStatus('error')))
      .toEqual({reviewSendStatus: 'error'});
  });
});

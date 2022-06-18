import { makeFakeComments } from '../../utils/mocks';
import { commentsData, loadComments } from './comments-data';

const comments = makeFakeComments();

describe('Reducer: commentsData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(commentsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({comments: [], isDataLoaded: false});
  });

  it('should update comments by load comments', () => {
    const state = {comments: [], isDataLoaded: false};
    expect(commentsData.reducer(state, loadComments(comments)))
      .toEqual({comments, isDataLoaded: true});
  });
});

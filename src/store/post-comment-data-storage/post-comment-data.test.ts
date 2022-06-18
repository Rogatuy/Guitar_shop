import { makeFakeComment} from '../../utils/mocks';
import { postCommentDataStorage, postUserCommentStorage } from './post-comment-data-storage';


const comment = makeFakeComment();
const initialStateComments = {
  userComments: [],
  userComment: {
    guitarId: 0,
    userName: '',
    advantage: '',
    disadvantage: '',
    comment: '',
    rating: 0,
    createAt: '',
    id: '',
  },
};


describe('Reducer: postCommentData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(postCommentDataStorage.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({userComments: initialStateComments.userComments, userComment: initialStateComments.userComment });
  });

  it('should update guitarComment by load comment', () => {
    const state = {userComments: initialStateComments.userComments, userComment: initialStateComments.userComment };
    expect(postCommentDataStorage.reducer(state, postUserCommentStorage(comment)))
      .toEqual({userComments: [comment], userComment: comment});
  });
});

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PostUserReview } from '../../types/state';

const initialState: PostUserReview = {
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

export const postCommentDataStorage = createSlice({
  name: NameSpace.PostUserComment,
  initialState,
  reducers: {
    postUserCommentStorage: (state, action) => {
      state.userComment = action.payload;
      state.userComments.push(state.userComment = action.payload);
    },
  },
});

export const {postUserCommentStorage} = postCommentDataStorage.actions;

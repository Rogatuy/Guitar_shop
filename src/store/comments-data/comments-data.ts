import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentsData } from '../../types/state';

const initialState: CommentsData = {
  comments: [],
  isDataLoaded: false,
};

export const commentsData = createSlice({
  name: NameSpace.CommentsData,
  initialState,
  reducers: {
    loadComments: (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    },
    toggleLoaderComments: (state) => {
      state.isDataLoaded = true;
    },
  },
});

export const {loadComments} = commentsData.actions;
export const {toggleLoaderComments} = commentsData.actions;

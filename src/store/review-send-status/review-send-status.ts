import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewSendStatusData } from '../../types/state';

const initialState: ReviewSendStatusData = {
  reviewSendStatus: 'initial',
};

export const reviewSendStatusData = createSlice({
  name: NameSpace.ReviewSendStatus,
  initialState,
  reducers: {
    reviewSendStatus: (state, action) => {
      state.reviewSendStatus = action.payload;
    },
  },
});

export const {reviewSendStatus} = reviewSendStatusData.actions;

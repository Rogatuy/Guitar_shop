import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { commentsData } from './comments-data/comments-data';
import { guitarFullData } from './guitar-full-data/guitar-full-data';
import { guitarsData } from './guitars-data/guitars-data';
import { serverStatusData } from './server-status/server-status';
import { selectedPagination } from './selected-pagination/selected-pagination';
import { postCommentDataStorage } from './post-comment-data-storage/post-comment-data-storage';
import { reviewSendStatusData } from './review-send-status/review-send-status';
import { mainSort } from './main-sort/main-sort';
import { mainFilter } from './main-filter/main-filter';
import { mainSearch } from './main-search/main-search';

export const rootReducer = combineReducers({
  [NameSpace.GuitarsData]: guitarsData.reducer,
  [NameSpace.CommentsData]: commentsData.reducer,
  [NameSpace.GuitarFullData]: guitarFullData.reducer,
  [NameSpace.ServerStatus]: serverStatusData.reducer,
  [NameSpace.SelectedPagination]: selectedPagination.reducer,
  [NameSpace.PostUserComment]: postCommentDataStorage.reducer,
  [NameSpace.ReviewSendStatus]: reviewSendStatusData.reducer,
  [NameSpace.MainSort]: mainSort.reducer,
  [NameSpace.MainFilter]: mainFilter.reducer,
  [NameSpace.MainSearch]: mainSearch.reducer,
});

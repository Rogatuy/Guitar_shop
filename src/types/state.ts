import { store } from '../store';
import { Comment, Comments } from './comments';
import { Guitar, Guitars } from './guitar';
import { ReviewSendStatus } from './user-data';

export type GuitarsData = {
    guitars: Guitars,
    isDataLoaded: boolean,
  };

export type GuitarFull = {
    guitarFull: Guitar,
    isDataLoaded: boolean,
  };

export type CommentsData = {
    comments: Comments,
    isDataLoaded: boolean,
  };

export type ServerStatusData = {
    status: boolean,
  };

export type SelectedPagination = {
  selectedPagination: number,
}

export type PostUserReview = {
  userComments: Comments,
  userComment: Comment,
};

export type ReviewSendStatusData = {
  reviewSendStatus: ReviewSendStatus,
};

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

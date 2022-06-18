import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { errorHandle } from '../services/error-handle';
import { CommentPostServer, Comments } from '../types/comments';
import { Guitar, Guitars } from '../types/guitar';
import { loadComments, toggleLoaderComments } from './comments-data/comments-data';
import { loadGuitarFull, toggleLoaderGuitarFull } from './guitar-full-data/guitar-full-data';
import { loadGuitars } from './guitars-data/guitars-data';
import { reviewSendStatus } from './review-send-status/review-send-status';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';


export const fetchGuitarsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitars',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Guitars>(APIRoute.Guitars);
      dispatch(loadGuitars(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchFullGuitarAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFullGuitar',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Guitar>(`${APIRoute.FullGuitar}/${id}`);
      dispatch(loadGuitarFull(data));
    } catch (error) {
      errorHandle(error);
      dispatch(toggleLoaderGuitarFull());
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.FullGuitar}/${id}/comments`);
      dispatch(loadComments(data));
    } catch (error) {
      errorHandle (error);
      dispatch(toggleLoaderComments());
    }
  },
);

export const addCommentOnSever = createAsyncThunk<void, CommentPostServer,  {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addCommentOnServer',
  async (comment, {dispatch, extra: api} ) => {
    try {
      dispatch(reviewSendStatus('sending'));
      await api.post<CommentPostServer>(`${APIRoute.Comments}`, comment);
      dispatch(reviewSendStatus('initial'));
    } catch (error) {
      errorHandle (error);
      dispatch(reviewSendStatus('error'));
    }
  },
);

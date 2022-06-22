import { Action } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { addCommentOnSever, fetchCommentsAction, fetchFullGuitarAction, fetchGuitarsAction } from './api-actions';
import { loadGuitars } from './guitars-data/guitars-data';
import { createApi } from '../services/api';
import { State } from '../types/state';
import { APIRoute } from '../const';
import { makeFakeComment, makeFakeGuitar, makeFakeGuitars } from '../utils/mocks';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { loadGuitarFull } from './guitar-full-data/guitar-full-data';
import { loadComments } from './comments-data/comments-data';
import { reviewSendStatus } from './review-send-status/review-send-status';

describe('Async actions', () => {
  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
        State,
        Action,
        ThunkDispatch<State, typeof api, Action>
        >(middlewares);

  it('should dispatch Load_Guitars when GET /guitars', async () => {
    const mockGuitars = makeFakeGuitars();

    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, mockGuitars);

    const store = mockStore();
    await store.dispatch(fetchGuitarsAction());
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadGuitars.toString());
  });

  it('should dispatch Load_Full_Guitar when GET /guitars/id', async () => {
    const mockGuitar = makeFakeGuitar();

    mockAPI
      .onGet(`${APIRoute.FullGuitar}/${mockGuitar.id}`)
      .reply(200, mockGuitar);

    const store = mockStore();
    await store.dispatch(fetchFullGuitarAction(mockGuitar.id));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadGuitarFull.toString());
  });

  it('should dispatch Load_Comments when GET /guitars/id/comments', async () => {
    const mockComment = makeFakeComment();

    mockAPI
      .onGet(`${APIRoute.FullGuitar}/${mockComment.guitarId}/comments`)
      .reply(200, mockComment);

    const store = mockStore();
    await store.dispatch(fetchCommentsAction(mockComment.guitarId));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(loadComments.toString());
  });

  it('should dispatch Post_Comment when POST comment', async () => {
    const mockComment = makeFakeComment();

    mockAPI
      .onPost(APIRoute.Comments)
      .reply(201, mockComment);

    const store = mockStore();
    await store.dispatch(addCommentOnSever(mockComment));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(reviewSendStatus.toString());
  });
});

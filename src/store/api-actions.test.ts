import { Action } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { fetchGuitarsAction } from './api-actions';
import { loadGuitars } from './guitars-data/guitars-data';
import { createApi } from '../services/api';
import { State } from '../types/state';
import { APIRoute } from '../const';
import { makeFakeGuitars } from '../utils/mocks';
import thunk, { ThunkDispatch } from 'redux-thunk';

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
});

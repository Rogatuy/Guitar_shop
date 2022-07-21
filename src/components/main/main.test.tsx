import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SortType, SortOrder } from '../../const';
import thunk from 'redux-thunk';
import { createApi } from '../../services/api';

import {makeFakeGuitars } from '../../utils/mocks';
import Main from './main';
import { State } from '../../types/state';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';


const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];


const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(middlewares);
const store = mockStore({
  SELECTED_PAGINATION:  {
    selectedPagination: 1,
  },
  GUITARS_DATA : {
    guitars: makeFakeGuitars(),
    isDataLoaded: true,
  },
  MAIN_SEARCH: {
    guitarsBySearch: makeFakeGuitars(),
  },
  MAIN_FILTER: {
    guitarsTypes: ['ukulele'],
    priceSearch: {
      min: null,
      max: null,
    },
    stringCount: ['4'],
  },
  MAIN_SORT: {
    sortType: SortType.Default,
    sortOrder: SortOrder.Default,
  },
});

describe('Component: Main', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Далее')).toBeInTheDocument();
    expect(screen.getByText('Каталог гитар')).toBeInTheDocument();
  });
});

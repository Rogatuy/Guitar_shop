import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createApi } from '../../services/api';
import { State } from '../../types/state';
import { makeFakeComments, makeFakeGuitar, makeFakeGuitars } from '../../utils/mocks';
import GuitarFull from './guitar-full';

const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(middlewares);
const store = mockStore({
  GUITAR_FULL_DATA:  {
    guitarFull: makeFakeGuitar(),
    isDataLoaded: true,
  },
  MAIN_SEARCH: {
    guitarsBySearch: makeFakeGuitars(),
  },
  COMMENTS_DATA : {
    comments: makeFakeComments(),
    isDataLoaded: true,
  },
  POST_USER_COMMENT: {
    userComments: [],
    userComment: {
      userName:'',
      advantage:'',
      disadvantage:'',
      comment:'',
      rating: 0,
      guitarId: 0,
      id:'',
      createAt:''  ,
    },
  }});

describe('Component: GuitarFull', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GuitarFull />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
    expect(screen.getByText('Главная')).toBeInTheDocument();
  });
});

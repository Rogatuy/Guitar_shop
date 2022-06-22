import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { State } from '../../../../types/state';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createApi } from '../../../../services/api';
import { makeFakeGuitars } from '../../../../utils/mocks';


import GuitarsList from './guitars-list';

const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(middlewares);
const store = mockStore({
  SELECTED_PAGINATION:  {
    selectedPagination: 1,
  },
});

const guitars = makeFakeGuitars();

describe('Component: GuitarList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GuitarsList guitars={guitars} />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Далее')).toBeInTheDocument();
  });
});

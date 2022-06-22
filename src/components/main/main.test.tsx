import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import {makeFakeGuitars } from '../../utils/mocks';
import Main from './main';

const mockStore = configureMockStore();
const store = mockStore({
  SELECTED_PAGINATION:  {
    selectedPagination: 1,
  },
  GUITARS_DATA : {
    guitars: makeFakeGuitars(),
    isDataLoaded: true,
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

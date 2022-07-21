import { render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Sort from './sort';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeGuitars } from '../../../../utils/mocks';
import { SortOrder, SortType } from '../../../../const';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

const store = mockStore({

  MAIN_SEARCH: {
    guitarsBySearch: makeFakeGuitars(),
  },
  MAIN_FILTER: {
    guitarsTypes: [],
    priceSearch: {
      min: null,
      max: null,
    },
    stringCount: [],
  },
  MAIN_SORT: {
    sortingType: SortType.Default,
    sortingOrder: SortOrder.Default,
  },
  GUITARS_DATA : {
    guitars: makeFakeGuitars(),
    isDataLoaded: true,
  },
});

describe('Component: Header', () => {
  it('should render correctly', () => {

    render (
      <Provider store={store}>
        <BrowserRouter>
          <Sort/>
        </BrowserRouter>
      </Provider>,
    );

    const forPrice = screen.getByText('по цене');

    expect(forPrice).toBeInTheDocument();
  });
});

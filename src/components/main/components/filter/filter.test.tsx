import { render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Filter from './filter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { SortType, SortOrder } from '../../../../const';
import { makeFakeGuitars } from '../../../../utils/mocks';

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

describe('Component: Filter', () => {
  it('should render correctly', () => {

    render (
      <Provider store={store}>
        <BrowserRouter>
          <Filter/>
        </BrowserRouter>
      </Provider>,
    );

    const filter = screen.getByText('Фильтр');
    const clear = screen.getByText('Очистить');

    expect(filter).toBeInTheDocument();
    expect(clear).toBeInTheDocument();
  });
});

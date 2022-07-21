import { render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FormSearch from './form-search';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
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

describe('Component: FormSearch', () => {
  it('should render correctly', () => {

    render (
      <Provider store={store}>
        <BrowserRouter>
          <FormSearch/>
        </BrowserRouter>
      </Provider>,
    );

    const resetSearch = screen.getByText('Сбросить поиск');

    expect(resetSearch).toBeInTheDocument();
    expect(screen.getByPlaceholderText('что вы ищите?')).toBeInTheDocument();
  });
});

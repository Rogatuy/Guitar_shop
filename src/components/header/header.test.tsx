import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeGuitars } from '../../utils/mocks';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

const store = mockStore({

  MAIN_SEARCH: {
    guitarsBySearch: makeFakeGuitars(),
  },
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render (
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </Provider>,
    );

    expect('svg').toBeDefined();
  });
});

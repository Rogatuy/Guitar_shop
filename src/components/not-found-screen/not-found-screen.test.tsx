import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NotFoundScreen from './not-found-screen';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeGuitars } from '../../utils/mocks';
// import { SortOrder, SortType } from '../../const';

const mockStore = configureMockStore();

const store = mockStore({

  MAIN_SEARCH: {
    guitarsBySearch: makeFakeGuitars(),
  },
  GUITARS_DATA : {
    guitars: makeFakeGuitars(),
    isDataLoaded: true,
  },
});

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <Provider store={store}>
        <HistoryRouter history={customHistory}>
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    const linkElement = screen.getByText('Вернуться на главную');
    const codeNotFound = screen.getByText('404. Page not found');

    expect(codeNotFound).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

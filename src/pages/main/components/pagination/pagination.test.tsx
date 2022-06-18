import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'react-router-dom/node_modules/history';

import Pagination from './pagination';
import { makeFakeGuitars } from '../../../../utils/mocks';

const mockStore = configureMockStore();
const fakeGuitars = makeFakeGuitars();

describe('Component: Pagination', () => {
  it('should render buttons [1, 2, 3 Далее] and NOT render [Назад]', () => {
    const customHistory = createMemoryHistory();
    const selectedPagination = 1;

    render(
      <Provider store={mockStore({
        SELECTED_PAGINATION: {
          selectedPagination: selectedPagination,
        },
      })}
      >
        <HistoryRouter history={customHistory}>

          <Pagination guitars={fakeGuitars}/>,
        </HistoryRouter>,
      </Provider>,

    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Далее')).toBeInTheDocument();
    expect(screen.queryByText('Назад')).not.toBeInTheDocument();
  });

  it('should render buttons [1, 2, 3 Далее] and NOT render [Далее]', () => {
    const customHistory = createMemoryHistory();
    const currentPagination = 3;

    render(
      <Provider store={mockStore({
        SELECTED_PAGINATION: {
          selectedPagination: currentPagination,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <Pagination guitars={fakeGuitars}/>,
        </HistoryRouter>,
      </Provider>,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Назад')).toBeInTheDocument();
    expect(screen.queryByText('Далее')).not.toBeInTheDocument();
  });

  it('should render buttons [1, 2, 3 Далее, Назад] and NOT render [Далее]', () => {
    const customHistory = createMemoryHistory();
    const selectedPagination = 2;

    render(
      <HistoryRouter history={customHistory}>
        <Provider store={mockStore({
          SELECTED_PAGINATION: {
            selectedPagination: selectedPagination,
          },
        })}
        >
          <Pagination guitars={fakeGuitars}/>,
        </Provider>,
      </HistoryRouter>,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Назад')).toBeInTheDocument();
    expect(screen.getByText('Далее')).toBeInTheDocument();
  });
});

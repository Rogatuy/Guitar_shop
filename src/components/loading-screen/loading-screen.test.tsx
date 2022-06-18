import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import LoadingScreen  from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <LoadingScreen />
      </HistoryRouter>,
    );

    const loadData = screen.getByText('Loading data, please wait or try reloading the page.');

    expect(loadData).toBeInTheDocument();
  });
});

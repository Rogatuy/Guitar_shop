import { render } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <Header />
      </HistoryRouter>,
    );

    expect('svg').toBeDefined();
  });
});

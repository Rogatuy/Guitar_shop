import { render,screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Sort from './sort';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <Sort />
      </HistoryRouter>,
    );

    const forPrice = screen.getByText('по цене');

    expect(forPrice).toBeInTheDocument();
  });
});

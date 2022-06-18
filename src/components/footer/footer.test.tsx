import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <Footer />
      </HistoryRouter>,
    );

    const whereCanBuy = screen.getByText('Где купить?');
    expect(whereCanBuy).toBeInTheDocument();
  });
});

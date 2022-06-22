import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Breadcrumbs from './breadcrumbs';

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <Breadcrumbs />
      </HistoryRouter>,
    );


    const main = screen.getByText('Главная');

    expect(main).toBeInTheDocument();
  });
});

import { render,screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import FormSearch from './form-search';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <FormSearch />
      </HistoryRouter>,
    );

    const resetSearch = screen.getByText('Сбросить поиск');

    expect(resetSearch).toBeInTheDocument();
  });
});

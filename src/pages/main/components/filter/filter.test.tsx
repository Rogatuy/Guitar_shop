import { render,screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Filter from './filter';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <Filter />
      </HistoryRouter>,
    );

    const filter = screen.getByText('Фильтр');
    const clear = screen.getByText('Очистить');

    expect(filter).toBeInTheDocument();
    expect(clear).toBeInTheDocument();
  });
});

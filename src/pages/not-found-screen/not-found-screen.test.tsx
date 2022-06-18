import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <NotFoundScreen />
      </HistoryRouter>,
    );

    const linkElement = screen.getByText('Вернуться на главную');
    const codeNotFound = screen.getByText('404. Page not found');

    expect(codeNotFound).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

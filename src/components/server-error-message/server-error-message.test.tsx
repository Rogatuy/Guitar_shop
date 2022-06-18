import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ServerErorMessage from './server-error-message';

describe('Component: ServerErorMessage', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <ServerErorMessage />
      </HistoryRouter>,
    );

    const wrong = screen.getByText('Something went wrong! Try reloading the page!');
    expect(wrong).toBeInTheDocument();
  });
});

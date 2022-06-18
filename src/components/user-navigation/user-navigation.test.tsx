import { render, screen  } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import UserNavigation from './user-navigation';

describe('Component: UserNavigation', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <UserNavigation />
      </HistoryRouter>,
    );

    const aboutCompany = screen.getByText('О компании');

    expect(aboutCompany).toBeInTheDocument();
  });
});

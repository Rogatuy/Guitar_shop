import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import CardGuitar from './card-guitar';
import { makeFakeGuitar } from '../../../../utils/mocks';

const mockGuitar = makeFakeGuitar();

describe('Component: Header', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <CardGuitar guitar={mockGuitar} />
      </HistoryRouter>,
    );

    const price = screen.getByText('Цена:');
    const buyIt = screen.getByText('Купить');
    expect(price).toBeInTheDocument();
    expect(buyIt).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import RatingStars from './rating-stars';
import {makeFakeGuitar} from '../../utils/mocks';

const mockGuitar = makeFakeGuitar();


describe('Component: RatingStars', () => {
  it('should render RatingStars', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <RatingStars rating={mockGuitar.rating} commentsCount={5}/>
      </HistoryRouter>,
    );

    expect(screen.getAllByTestId('rating-chart-star')).toHaveLength(5);
  });
});

import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import CommentGuitar from './comment-guitar';
import { makeFakeComment } from '../../../../utils/mocks';

const mockComment = makeFakeComment();

describe('Component: CommentGuitar', () => {
  it('should render correctly', () => {
    const customHistory = createMemoryHistory();

    render (
      <HistoryRouter history={customHistory}>
        <CommentGuitar comment={mockComment} />
      </HistoryRouter>,
    );

    const comments = screen.getByText('Комментарий:');
    const advantage = screen.getByText('Достоинства:');
    expect(advantage).toBeInTheDocument();
    expect(comments).toBeInTheDocument();
  });
});

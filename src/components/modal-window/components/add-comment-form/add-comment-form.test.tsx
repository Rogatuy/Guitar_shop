import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeFakeGuitar} from '../../../../utils/mocks';
import HistoryRouter from '../../../history-route/history-route';


import AddCommentForm from './add-comment-form';

const mockGuitar = makeFakeGuitar();
const mockStore = configureMockStore();
const sendStatus = 'initial';

const handleClick = jest.fn();

describe('Component: AddCommentForm', () => {
  it('should render CommentForm', () => {
    const customHistory = createMemoryHistory();

    render (
      <Provider store={mockStore({
        REVIEW_SEND_STATUS: {
          reviewSendStatus: sendStatus,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <AddCommentForm guitar={mockGuitar} modalTypeActive setModalTypeActive={handleClick}/>
        </HistoryRouter>,
      </Provider>,
    );

    expect(screen.getByText('Отправить отзыв')).toBeInTheDocument();
    expect(screen.getByText('Ваше Имя')).toBeInTheDocument();
    expect(screen.getByText('Отправить отзыв')).toBeInTheDocument();
  });
});

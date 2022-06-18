import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { makeFakeGuitar} from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';

import ModalWindow from './modal-window';

const mockGuitar = makeFakeGuitar();
const mockStore = configureMockStore();
const sendStatus = 'initial';

const handleClick = jest.fn();
const secondHadnleClick = jest.fn();

describe('Component: ModalWindow', () => {
  it('should render ModalSuccess', () => {
    const customHistory = createMemoryHistory();

    render(
      <Provider store={mockStore({
        REVIEW_SEND_STATUS: {
          reviewSendStatus: sendStatus,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <ModalWindow active modalTypeActive setActive={handleClick} setModalTypeActive={secondHadnleClick} guitar={mockGuitar} />);
        </HistoryRouter>,
      </Provider>,
    );

    const products = screen.getByText('К покупкам!');

    expect(products).toBeInTheDocument();
  });

  it('should render ModalForm', () => {
    const customHistory = createMemoryHistory();

    render(
      <Provider store={mockStore({
        REVIEW_SEND_STATUS: {
          reviewSendStatus: sendStatus,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <ModalWindow active modalTypeActive={false} setActive={handleClick} setModalTypeActive={secondHadnleClick} guitar={mockGuitar} />);
        </HistoryRouter>,
      </Provider>,
    );

    const products = screen.queryByText('К покупкам!');
    const addComment = screen.getByText('Оставить отзыв');

    expect(products).not.toBeInTheDocument();
    expect(addComment).toBeInTheDocument();
  });

  it('should\'t render Modal', () => {
    const customHistory = createMemoryHistory();

    render(
      <Provider store={mockStore({
        REVIEW_SEND_STATUS: {
          reviewSendStatus: sendStatus,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <ModalWindow active={false} modalTypeActive={false} setActive={handleClick} setModalTypeActive={secondHadnleClick} guitar={mockGuitar} />);
        </HistoryRouter>,
      </Provider>,
    );

    const products = screen.queryByText('К покупкам!');
    const addComment = screen.queryByText('Оставить отзыв');

    expect(products).not.toBeInTheDocument();
    expect(addComment).not.toBeInTheDocument();
  });
});

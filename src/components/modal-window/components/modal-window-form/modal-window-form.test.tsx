import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { makeFakeGuitar } from '../../../../utils/mocks';
import HistoryRouter from '../../../history-route/history-route';

import ModalWindowForm from './modal-window-form';


const handleClick = jest.fn();
const secondHadnleClick = jest.fn();
const handleClickOverlay = jest.fn();
const mockGuitar = makeFakeGuitar();

const mockStore = configureMockStore();
const sendStatus = 'initial';

describe('Component: ModalWindowForm', () => {
  it('should render ModalWindowForm', () => {
    const customHistory = createMemoryHistory();

    render(
      <Provider store={mockStore({
        REVIEW_SEND_STATUS: {
          reviewSendStatus: sendStatus,
        },
      })}
      >
        <HistoryRouter history={customHistory}>
          <ModalWindowForm active modalTypeActive={false} setActive={handleClick} setModalTypeActive={secondHadnleClick} guitar={mockGuitar} handleClickOverlay={handleClickOverlay}/>);
        </HistoryRouter>
      </Provider>,
    );

    const products = screen.queryByText('К покупкам!');
    const addComment = screen.getByText('Оставить отзыв');

    expect(products).not.toBeInTheDocument();
    expect(addComment).toBeInTheDocument();
  });
});

import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../../history-route/history-route';

import ModalWindowSuccess from './modal-window-success';


const handleClick = jest.fn();
const secondHadnleClick = jest.fn();
const handleClickOverlay = jest.fn();

describe('Component: ModalWindowSuccess', () => {
  it('should render ModalSuccess', () => {
    const customHistory = createMemoryHistory();

    render(
      <HistoryRouter history={customHistory}>
        <ModalWindowSuccess active modalTypeActive setActive={handleClick} setModalTypeActive={secondHadnleClick} handleClickOverlay={handleClickOverlay}/>);
      </HistoryRouter>,
    );

    const products = screen.getByText('К покупкам!');

    expect(products).toBeInTheDocument();
  });
});


import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'react-router-dom/node_modules/history';

import { makeFakeGuitar } from '../../../../utils/mocks';
import Tabs from './tabs';

const mockGuitar = makeFakeGuitar();
const customHistory = createMemoryHistory();


describe('Component: ProductTabs', () => {
  it('should render tab "Характеристики"', () => {
    render(
      <HistoryRouter history={customHistory}>
        <Tabs guitar={mockGuitar} currentTab='characteristics' />
      </HistoryRouter>,
    );

    expect(screen.getByRole('table')).toBeInTheDocument();

    const vendorCodeGuitar = screen.getByText(`${mockGuitar.vendorCode}`);
    expect(vendorCodeGuitar).toBeInTheDocument();
  });

  it('should render tab "Описание" after click', () => {
    render(
      <HistoryRouter history={customHistory}>
        <Tabs guitar={mockGuitar} currentTab='description'/>
      </HistoryRouter>,
    );

    fireEvent.click(screen.getByText('Описание'));
    expect(screen.queryByRole('table')).not.toBeInTheDocument();

    const descriptionGuitar = screen.getByText(`${mockGuitar.description}`);
    expect(descriptionGuitar).toBeInTheDocument();
  });
});

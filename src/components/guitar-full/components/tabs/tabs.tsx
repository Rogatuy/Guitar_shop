import  './tabs.css';

import { useEffect, useState } from 'react';
import { Guitar } from '../../../../types/guitar';
import { convertTypeGuitarToText } from '../../../../utils/utils';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, tabTranscription } from '../../../../const';

const getComponentByTab = (targetTab:string, guitar: Guitar) => {
  switch (targetTab) {
    case 'characteristics':
      return (
        <div className="tabs__content" id="characteristics">
          <table className="tabs__table">
            <tbody>
              <tr className="tabs__table-row">
                <td className="tabs__title">Артикул:</td>
                <td className="tabs__value">{guitar.vendorCode}</td>
              </tr>
              <tr className="tabs__table-row">
                <td className="tabs__title">Тип:</td>
                <td className="tabs__value">{convertTypeGuitarToText(guitar.type)}</td>
              </tr>
              <tr className="tabs__table-row">
                <td className="tabs__title">Количество струн:</td>
                <td className="tabs__value">{guitar.stringCount} струнная</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case 'description':
      return (
        <div className="tabs__content" id="description">
          <p className="tabs__product-description">{guitar.description}</p>
        </div>
      );
  }
};

type TabsProps = {
    guitar: Guitar;
    currentTab: string;
  }

const TABS = ['characteristics', 'description'];

function Tabs ({guitar,currentTab}: TabsProps): JSX.Element {
  const [targetTab, setTargetTab] = useState(currentTab);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentTab !== 'characteristics' && currentTab !== 'description') {
      navigate(AppRoute.NoFoundScreen);
    }
  }, [currentTab, navigate]);


  return (
    <div className="tabs">
      {TABS.map((tab: string) => (
        <Link
          to={(tab !== targetTab) ? `/guitars/${guitar.id}/${tab}`: '#'}
          key={tab}
          className={classNames('button', 'button--medium', 'tabs__button', {
            'button--black-border': tab !== targetTab, 'button-disabled': tab === targetTab,
          })}
          onClick={() => setTargetTab(tab)}
        >{tabTranscription[tab as keyof typeof tabTranscription]}
        </Link>
      ))}
      {getComponentByTab(targetTab, guitar)}
    </div>
  );
}

export default Tabs;

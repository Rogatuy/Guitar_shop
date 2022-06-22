import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';

function Breadcrumbs(): JSX.Element {
  return (
    <>
      <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
      <ul className="breadcrumbs page-content__breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="link" to={`${AppRoute.Main}`}>Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="link" to={AppRoute.Main}>Каталог</Link>
        </li>
      </ul>
    </>
  );
}

export default Breadcrumbs;

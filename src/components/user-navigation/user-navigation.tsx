import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function UserNavigation(): JSX.Element {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link className="link main-nav__link" to={`${AppRoute.Main}`}>Каталог</Link>
        </li>
        <li>
          <Link className="link main-nav__link" to="#">Где купить?</Link>
        </li>
        <li>
          <Link className="link main-nav__link" to="#">О компании</Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigation;

import { Link } from 'react-router-dom';
import FormSearch from '../../pages/main/components/form-search/form-search';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo/>
        <UserNavigation/>
        <FormSearch/>
        <Link className="header__cart-link" to={'#'} aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg><span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;


import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Icons from '../icons/icons';

function NotFoundScreen() {
  return (
    <div className="wrapper">
      <Icons/>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1> 404. Page not found</h1>
          <Link className="film-card__wrap" to='/page_1'>Вернуться на главную</Link>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFoundScreen;

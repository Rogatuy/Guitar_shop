import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Filter from './components/filter/filter';
import Footer from '../footer/footer';
import GuitarsList from './components/guitars-list/guitars-list';
import Header from '../header/header';
import Icons from '../icons/icons';
import Sort from './components/sort/sort';
import { getGuitarsList } from '../../store/guitars-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { changePagination } from '../../store/selected-pagination/selected-pagination';
import { GUITAR_STEP, ZERO } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { isNumber } from '../../utils/utils';


function Main(): JSX.Element {

  const guitars = useAppSelector(getGuitarsList);
  const {idPag} = useParams();
  const pagination = Number(idPag);
  const dispatch = useAppDispatch();
  dispatch(changePagination(pagination));


  const maxPagesPagination = Math.ceil(guitars.length / GUITAR_STEP);

  if (idPag !== undefined ) {
    if (maxPagesPagination < pagination || !isNumber(idPag) || pagination === ZERO) {
      return (
        <NotFoundScreen/>
      );
    }
  }

  return (
    <div className="wrapper">
      <Icons/>
      <Header/>
      <main className="page-content">
        <div className="container">
          <Breadcrumbs/>
          <div className="catalog">
            <Filter/>
            <GuitarsList
              guitars={guitars}
            />
            <Sort/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;

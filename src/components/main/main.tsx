import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Filter from './components/filter/filter';
import Footer from '../footer/footer';
import GuitarsList from './components/guitars-list/guitars-list';
import Header from '../header/header';
import Icons from '../icons/icons';
import Sort from './components/sort/sort';
import { getGuitarsList } from '../../store/guitars-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changePagination } from '../../store/selected-pagination/selected-pagination';
import { GUITAR_STEP, SortOrder, SortType, ZERO } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { createSearchQuery, isNumber } from '../../utils/utils';
import { getPriceFilters, getStringFilters, getTypeFilters } from '../../store/main-filter/selectors';
import { getSortParams } from '../../store/main-sort/selectors';
import { useEffect} from 'react';
import { fetchMaxPriceGuitarAction, fetchMinPriceGuitarAction, fetchSortedGuitarsAction} from '../../store/api-actions';


function Main(): JSX.Element {

  const guitars = useAppSelector(getGuitarsList);
  const {idPag} = useParams();
  const pagination = Number(idPag);
  const dispatch = useAppDispatch();
  dispatch(changePagination(pagination));

  const navigate = useNavigate();
  const location = useLocation();

  const typeFilters = useAppSelector(getTypeFilters);
  const priceFilters = useAppSelector(getPriceFilters);
  const sortingParams = useAppSelector(getSortParams);
  const stringCountFilters = useAppSelector(getStringFilters);

  const searchQuery = createSearchQuery(typeFilters, priceFilters, stringCountFilters, sortingParams);

  const minPriceGuitarSearchQuery = createSearchQuery(
    typeFilters,
    {min: null, max: null},
    stringCountFilters,
    {sortType: SortType.Price, sortOrder: SortOrder.Up},
  );

  const maxPriceGuitarSearchQuery = createSearchQuery(
    typeFilters,
    {min: null, max: null},
    stringCountFilters,
    {sortType: SortType.Price, sortOrder: SortOrder.Down},
  );

  useEffect(() => {

    navigate(`${location.pathname}?${searchQuery.slice(1)}`);
    if (searchQuery) {
      dispatch(fetchSortedGuitarsAction(`${searchQuery}`));
    }
    dispatch(fetchMinPriceGuitarAction(`${minPriceGuitarSearchQuery}`));
    dispatch(fetchMaxPriceGuitarAction(`${maxPriceGuitarSearchQuery}`));
  }, [dispatch, maxPriceGuitarSearchQuery, minPriceGuitarSearchQuery, searchQuery, navigate, location.pathname]);

  // настройка пагинации
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
            <Sort/>
            <GuitarsList guitars={guitars}/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;



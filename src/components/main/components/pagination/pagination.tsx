import { Guitars } from '../../../../types/guitar';
import {AppRoute, FIRST_INDEX_PAGINATION, GUITAR_STEP, LAST_INDEX_PAGINATION, STEP_PAGINATION} from '../../../../const';
import { Link, useLocation } from 'react-router-dom';
import { changePagination } from '../../../../store/selected-pagination/selected-pagination';
import { getSelectedPagination } from '../../../../store/selected-pagination/selectors';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';


type PaginationProps = {
  guitars: Guitars;
}

function Pagination({guitars} : PaginationProps): JSX.Element {

  const currentPagination = useAppSelector(getSelectedPagination);
  const dispatch = useAppDispatch();

  const { search } = useLocation();

  const pageNumbers: number [] = [];
  for (let i = 1; i <= Math.ceil(guitars.length / GUITAR_STEP); i++ ) {
    pageNumbers.push(i);
  }

  const firstIndexPagination = pageNumbers[FIRST_INDEX_PAGINATION];
  const lastIndexPagination = pageNumbers[pageNumbers.length + LAST_INDEX_PAGINATION];

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {currentPagination !== firstIndexPagination
          ?
          <li className="pagination__page pagination__page--prev" id="prev">
            <Link className="link pagination__page-link" to={`${AppRoute.Main}page_${currentPagination - STEP_PAGINATION}${search}`} onClick={() => dispatch(changePagination(currentPagination - STEP_PAGINATION))}>Назад</Link>
          </li>
          : ''}

        {pageNumbers.map((number) => (
          <li className={currentPagination === number ? 'pagination__page pagination__page--active' : 'pagination__page'} key={number}>
            <Link className="link pagination__page-link" to={`${AppRoute.Main}page_${number}${search}`} onClick={() => dispatch(changePagination(number))}>{number}</Link>
          </li>
        ))}

        {currentPagination !== lastIndexPagination
          ?
          <li className="pagination__page pagination__page--next" id="next">
            <Link className="link pagination__page-link"  to={`${AppRoute.Main}page_${currentPagination + STEP_PAGINATION}${search}`} onClick={() => dispatch(changePagination(currentPagination + STEP_PAGINATION))}>Далее</Link>
          </li>
          : ''}
      </ul>
    </div>
  );
}

export default Pagination;

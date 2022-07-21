import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SortOrder, SortType } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { resetSort, updateSortOrder, updateSortType } from '../../../../store/main-sort/main-sort';
import { getSortParams } from '../../../../store/main-sort/selectors';
import { getSearchParams } from '../../../../utils/utils';

function Sort(): JSX.Element {

  const dispatch = useAppDispatch();
  const { search } = useLocation();

  const {_sort, _order} = getSearchParams(search);

  const params = useAppSelector(getSortParams);

  const [sortType, setSortType] = useState(_sort ? _sort[0] : SortType.Default);
  const [sortOrder, setSortOrder] = useState(_order ? _order[0] : SortOrder.Default);

  useEffect(() => {
    setSortType(params.sortType);
    setSortOrder(params.sortOrder);
  }, [params.sortType, params.sortOrder]);

  useEffect(() => {
    if (_sort) {
      dispatch(updateSortType(_sort[0]));
    }
    if (_order) {
      dispatch(updateSortOrder(_order[0]));
    }
    return () => {
      dispatch(resetSort());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePriceSort = () => {
    dispatch(updateSortType(SortType.Price));
    setSortType(SortType.Price);
  };

  const handleRatingSort = () => {
    dispatch(updateSortType(SortType.Rating));
    setSortType(SortType.Rating);
  };

  const handleSortUp = () => {
    if (sortType === SortType.Default) {
      dispatch(updateSortType(SortType.Price));
      setSortType(SortType.Price);
    }
    dispatch(updateSortOrder(SortOrder.Up));
    setSortOrder(SortOrder.Up);
  };

  const handleSortingDown = () => {
    if (sortType === SortType.Default) {
      dispatch(updateSortType(SortType.Price));
      setSortType(SortType.Price);
    }
    dispatch(updateSortOrder(SortOrder.Down));
    setSortOrder(SortOrder.Down);
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          className={`catalog-sort__type-button ${sortType === SortType.Price ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по цене"
          onClick={handlePriceSort}
        >
        по цене
        </button>
        <button
          className={`catalog-sort__type-button ${sortType === SortType.Rating ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по популярности"
          onClick={handleRatingSort}
        >
          по популярности
        </button>
      </div>
      <div className="catalog-sort__order">
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--up ${sortOrder === SortOrder.Up ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По возрастанию"
          onClick={handleSortUp}
        >
        </button>
        <button
          className=
            {`catalog-sort__order-button catalog-sort__order-button--down ${sortOrder === SortOrder.Down ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По убыванию"
          onClick={handleSortingDown}
        >
        </button>
      </div>
    </div>
  );
}

export default Sort;

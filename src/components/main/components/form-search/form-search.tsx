import { useState, useEffect, ChangeEvent, FocusEvent  } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { fetchGuitarsBySearchAction } from '../../../../store/api-actions';
import { resetGuitarsBySearch } from '../../../../store/main-search/main-search';
import { getGuitarsBySearch } from '../../../../store/main-search/selectors';


function FormSearch(): JSX.Element {

  const dispatch = useAppDispatch();
  const guitars = useAppSelector(getGuitarsBySearch);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const handleResetButton = () => {
    setSearchValue('');
    dispatch(resetGuitarsBySearch());
  };

  const handleBlurComponent = (evt: FocusEvent<HTMLDivElement>) => {
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      setSearchValue('');
      dispatch(resetGuitarsBySearch());
    }
  };

  const handleClickLink = () => {
    setSearchValue('');
    dispatch(resetGuitarsBySearch());
  };

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchGuitarsBySearchAction(searchValue));
    }
  }, [dispatch, searchValue]);

  return (
    <div className="form-search" onBlur={handleBlurComponent}>
      <form className="form-search__form" id="form-search">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
          value={searchValue}
          onChange={handleSearchChange}
        >
        </input>
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={`form-search__select-list ${guitars.length > 0 ? 'list-opened' : 'hidden'}`}>
        {guitars.map((guitar) => (
          <li
            className="form-search__select-item"
            key={guitar.id}
          >
            <Link
              className="form-search__select-item"
              to={`${AppRoute.Guitar}${guitar.id}${AppRoute.Characteristics}`}
              style={{display: 'inline-block', width: '100%', padding: '0'}}
              onClick={handleClickLink}
            >
              {guitar.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="form-search__reset"
        type="reset"
        form="form-search"
        onClick={handleResetButton}
      >
        <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;

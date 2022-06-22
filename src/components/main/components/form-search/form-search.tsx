function FormSearch(): JSX.Element {
  const tabIndex = 0;
  return (
    <div className="form-search">
      <form className="form-search__form" id="form-search">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?"></input>
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className="form-search__select-list hidden">
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер Plus</li>
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер UX</li>
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер UX2</li>
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер UX3</li>
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер UX4</li>
        <li className="form-search__select-item" tabIndex={tabIndex}>Четстер UX5</li>
      </ul>
      <button className="form-search__reset" type="reset" form="form-search">
        <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;

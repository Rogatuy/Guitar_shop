import { ratingToText, SortOrder, SortType} from '../const';
import { Comments } from '../types/comments';
import { Sort } from '../types/sort';


export const convertRatingToText = ( ratingNumber: number) => {
  const wholeRating = Math.round(ratingNumber);
  switch (wholeRating) {
    case ratingToText.VeryBad :
      return 'Очень плохо';
    case ratingToText.Bad :
      return 'Плохо';
    case ratingToText.Normal :
      return 'Удовлетворительно';
    case ratingToText.Good :
      return 'Хорошо';
    case ratingToText.VeryGood :
      return 'Отлично';
  }
};

export const convertTypeGuitarToText = ( typeGuitar: string) => {
  switch (typeGuitar) {
    case 'electric' :
      return 'Электрическая';
    case 'acoustic' :
      return 'Акустическая';
    case 'ukulele' :
      return 'Укулеле';
  }
};

export const getSortComment = (comments: Comments) => comments.slice().sort((a, b) => Date.parse(b.createAt) - Date.parse(a.createAt));

export const scrollOnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const isNumber = (value: string | number ): boolean =>
  ((value !== null) && !isNaN(Number(value.toString())) && (value !== undefined));

export const getSearchParams = (search: string): Record<string, string[]> => {
  const result: Record<string, string[]> = {};
  search
    .substring(1)
    .split('&')
    .forEach((item) => {
      const param = item.split('=');

      if (param[0] in result) {
        result[param[0]].push(param[1]);
      } else {
        result[param[0]] = [param[1]];
      }
    });
  return result;
};


export const createSearchQuery =
  ( typeFilters: string[],
    priceFilters: Record<'min' | 'max', number | null>,
    stringCountFilters: string[],
    sortParams: Sort,
  ): string =>
  {
    const createTypeQuery = (types: string[]): string => types.length > 0
      ? `type=${types.join('&type=')}`
      : '';

    const createSortQuery = (sortes: Sort): string => {
      const sortQuery = sortes.sortType !== SortType.Default
        ? `_sort=${sortParams.sortType}`
        : '';

      return sortes.sortOrder !== SortOrder.Default
        ? `${sortQuery}&_order=${sortParams.sortOrder}`
        : sortQuery;
    };

    const createStringCountQuery = (strings: string[]): string => strings.length > 0
      ? `stringCount=${strings.join('&stringCount=')}`
      : '';

    const createPriceQuery = (prices: Record<'min' | 'max', number | null>) => {
      const minPrice = prices.min ? `price_gte=${prices.min}` : '';
      const maxPrice = prices.max ? `price_lte=${prices.max}` : '';
      return [minPrice, maxPrice].filter((item) => (item !== '')).join('&');
    };

    const queries: string[] =
      [
        createTypeQuery(typeFilters),
        createSortQuery(sortParams),
        createPriceQuery(priceFilters),
        createStringCountQuery(stringCountFilters),
      ]
        .filter((item) => item !== '');

    return queries.length > 0 ? `&${queries.join('&')}` : '';
  };

import { Key } from 'react';
import { MAX_RATING } from '../../const';
import { convertRatingToText } from '../../utils/utils';

type RatingStarsProps = {
    rating: number;
    commentsCount?: number;
  };

const starsComponent = (rating: number) => {
  const wholeRating = Math.round(rating);
  const filledStars = [];
  const emptyStars = [];
  for (let i = 0; i < wholeRating; i++) {
    filledStars.push(i);
  }
  for (let i = 0; i < (MAX_RATING - wholeRating); i++) {
    emptyStars.push(i);
  }

  function FilledStar(): JSX.Element  {
    return (
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-full-star" data-testid="rating-chart-star"></use>
      </svg>);
  }

  function EmptyStar(): JSX.Element  {
    return (
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-star" data-testid="rating-chart-star"></use>
      </svg>);
  }

  return (
    <>
      {filledStars.map((i: Key | null | undefined) => (
        <FilledStar
          key = {i}
        />
      ))}
      {emptyStars.map((i: Key | null | undefined) => (
        <EmptyStar
          key = {i}
        />
      ))}
    </>
  );
};

function RatingStars({rating, commentsCount}: RatingStarsProps): JSX.Element {

  return (
    <div className="product-card__info">
      <div className="rate product-card__rate">
        {starsComponent(rating)}
        <p className="visually-hidden">Рейтинг:{convertRatingToText(rating)}</p>
        {commentsCount ? <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{commentsCount}</p> : ''}
      </div>
    </div>
  );
}

export default RatingStars;


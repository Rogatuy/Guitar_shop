import { Link } from 'react-router-dom';
import RatingStars from '../../../rating-stars/rating-stars';
import { AppRoute } from '../../../../const';
import { Guitar } from '../../../../types/guitar';


type CardGuitarProps = {
    guitar: Guitar;
  };

function CardGuitar({guitar}: CardGuitarProps): JSX.Element {
  return (
    <div className="product-card">
      <img src={guitar.previewImg} width="75" height="190" alt={guitar.name}></img>
      <div className="product-card__info">
        <RatingStars
          rating = {guitar.rating}
          commentsCount = {guitar.comments.length}
        />
        <p className="product-card__title">{guitar.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{guitar.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`${AppRoute.Guitar}${guitar.id}${AppRoute.Characteristics}`}>Подробнее</Link>
        <Link className="button button--red button--mini button--add-to-cart" to={'#'}>Купить</Link>
      </div>
    </div>
  );
}

export default CardGuitar;

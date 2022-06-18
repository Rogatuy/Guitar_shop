import RatingStars from '../../../../components/rating-stars/rating-stars';
import {Comment} from '../../../../types/comments';
import dayjs from 'dayjs';
import localeRu from 'dayjs/locale/ru';

type CommentProps = {
    comment: Comment;
};

function CommentGuitar({comment}: CommentProps): JSX.Element {
  const currentDate = dayjs(comment.createAt).locale(localeRu).format('D MMMM');

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{comment.userName}</h4>
        <span className="review__date">{currentDate}</span>
      </div>
      <RatingStars
        rating = {comment.rating}
      />
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{comment.advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{comment.disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment.comment}</p>
    </div>
  );
}

export default CommentGuitar;

import  './add-comment-form.css';

import { FormEvent,useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { addCommentOnSever } from '../../../../store/api-actions';
import { reviewSendStatus } from '../../../../store/review-send-status/review-send-status';
import { getReviewSendStatus } from '../../../../store/review-send-status/selectors';
import { Guitar } from '../../../../types/guitar';
import dayjs from 'dayjs';
import { postUserCommentStorage } from '../../../../store/post-comment-data-storage/post-comment-data-storage';


type AddCommentFormProps = {
    guitar: Guitar;
    modalTypeActive: boolean;
    setModalTypeActive:  (click: boolean) => void;
  }

function AddCommentForm({guitar, modalTypeActive, setModalTypeActive}: AddCommentFormProps): JSX.Element {

  const [userName, setUserName] = useState<string>('');
  const [advantage, setAdvantage] = useState<string>('');
  const [disadvantage, setDisadvantage] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [starRating, setStarRating] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);

  const [isRatingWarning, setIsRatingWarning] = useState(false);
  const [isUserNameWarning, setIsUserNameWarning] = useState(false);
  const [isAdvantageWarning, setIsAdvantageWarning] = useState(false);
  const [isDisadvantageWarning, setIsDisadvantageWarning] = useState(false);
  const [isCommentWarning, setIsCommentWarning] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const guitarId = guitar.id;
  const sendStatus = useAppSelector(getReviewSendStatus);

  useEffect (() => () => {
    dispatch(reviewSendStatus('initial'));
  }, [dispatch]);

  useEffect(() => {
    if (!starRating || !userName || !advantage || !disadvantage || !comment) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [starRating, userName, advantage, disadvantage, comment]);

  useEffect (() => {
    if (isSending && sendStatus === 'initial') {
      navigate(`${AppRoute.Guitar}${guitar.id}`);
    }
    setIsSending(sendStatus === 'sending');
  }, [dispatch, guitar.id, isSending, navigate, sendStatus]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!starRating) {
      setIsRatingWarning(true);
    } else {
      setIsRatingWarning(false);
    }

    if (!userName) {
      setIsUserNameWarning(true);
    } else {
      setIsUserNameWarning(false);
    }

    if (!advantage) {
      setIsAdvantageWarning(true);
    } else {
      setIsAdvantageWarning(false);
    }

    if (!disadvantage) {
      setIsDisadvantageWarning(true);
    } else {
      setIsDisadvantageWarning(false);
    }

    if (!comment) {
      setIsCommentWarning(true);
    } else {
      setIsCommentWarning(false);
    }

    if (isFormValid) {
      const currentId = String(Math.random());
      const currentDate = String(dayjs());
      const currentComment = String(comment);
      dispatch(addCommentOnSever({userName, advantage, disadvantage, comment: currentComment, rating: starRating, guitarId}));
      dispatch(postUserCommentStorage({userName, advantage, disadvantage, comment, rating: starRating, guitarId, id: currentId, createAt: currentDate }));
      setModalTypeActive(!modalTypeActive);
    }
  };

  return (
    <form className="form-review"
      onSubmit={handleFormSubmit}
    >
      <div className="form-review__wrapper">
        <div className="form-review__name-wrapper">
          <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
          <input
            className="form-review__input form-review__input--name"
            id="user-name"
            type="text"
            autoComplete="off"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <p className="form-review__warning" style={isUserNameWarning ? {} : {visibility: 'hidden'}} >
            Заполните поле
          </p>
        </div>
        <div>
          <span className="form-review__label form-review__label--required">Ваша Оценка</span>
          <div className="rate rate--reverse">
            <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" onChange={(event) => setStarRating(Number(event.target.value))}/>
            <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
            <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" onChange={(event) => setStarRating(Number(event.target.value))}/>
            <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
            <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" onChange={(event) => setStarRating(Number(event.target.value))}/>
            <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
            <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" onChange={(event) => setStarRating(Number(event.target.value))}/>
            <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
            <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" onChange={(event) => setStarRating(Number(event.target.value))}/>
            <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
            <p className="rate__message" style={isRatingWarning ? {} : {visibility: 'hidden'}}>
              Поставьте оценку
            </p>
          </div>
        </div>
      </div>
      <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
      <input
        className="form-review__input"
        id="adv"
        type="text"
        autoComplete="off"
        value={advantage}
        onChange={(event) => setAdvantage(event.target.value)}
      />
      <p className="form-review__warning" style={isAdvantageWarning ? {} : {visibility: 'hidden'}}>
        Заполните поле
      </p>
      <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
      <input
        className="form-review__input"
        id="disadv"
        type="text"
        autoComplete="off"
        value={disadvantage}
        onChange={(event) => setDisadvantage(event.target.value)}
      />
      <p className="form-review__warning" style={isDisadvantageWarning ? {} : {visibility: 'hidden'}}>
        Заполните поле
      </p>
      <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
      <textarea
        className="form-review__input form-review__input--textarea"
        id="comment"
        autoComplete="off"
        defaultValue={comment}
        onChange={(event) => setComment(event.target.value)}
      >
      </textarea>
      <p className="form-review__warning" style={isCommentWarning ? {} : {visibility: 'hidden'}}>
        Заполните поле
      </p>
      <button
        className="button button--medium-20 form-review__button"
        type="submit"
      >
          Отправить отзыв
      </button>
      {sendStatus === 'error' && <span>Oops, something went wrong while submitting your review! Try later!</span>}
    </form>
  );
}

export default AddCommentForm;

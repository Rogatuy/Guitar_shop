import  './add-comment-form.css';
import classNames from 'classnames';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
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
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const guitarId = guitar.id;
  const sendStatus = useAppSelector(getReviewSendStatus);

  useEffect (() => () => {
    dispatch(reviewSendStatus('initial'));
  }, [dispatch]);

  const handleCheckIsDisabled = useCallback((() => {
    setIsDisabled(comment === '' || userName === '' || advantage === '' || disadvantage === '' || starRating === 0);
  }), [advantage, comment, disadvantage, starRating, userName]);

  useEffect(() => {
    handleCheckIsDisabled();
  }, [handleCheckIsDisabled]);

  useEffect (() => {
    if (isSending && sendStatus === 'initial') {
      navigate(`${AppRoute.Guitar}${guitar.id}`);
    }
    setIsSending(sendStatus === 'sending');
  }, [dispatch, guitar.id, isSending, navigate, sendStatus]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isDisabled) {
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
          <label className={classNames('form-review__label', {'form-review__label--required' : (userName === '')})} htmlFor="user-name">Ваше Имя</label>
          <input
            className="form-review__input form-review__input--name"
            id="user-name"
            type="text"
            autoComplete="off"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          {(userName === '') ? <p className="form-review__warning">Заполните поле</p> : ''}
        </div>
        <div><span className={classNames('form-review__label', {'form-review__label--required' : starRating === 0})}>Ваша Оценка</span>
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
            {(starRating === 0) ? <p className="rate__message">Поставьте оценку</p> : ''}
          </div>
        </div>
      </div>
      <label className={classNames('form-review__label', {'form-review__label--required' : (advantage === '')})} htmlFor="adv">Достоинства</label>
      <input
        className="form-review__input"
        id="adv"
        type="text"
        autoComplete="off"
        value={advantage}
        onChange={(event) => setAdvantage(event.target.value)}
      />
      {(advantage === '') ? <p className="form-review__warning">Заполните поле</p> : ''}
      <label className={classNames('form-review__label', {'form-review__label--required' : (disadvantage === '')})} htmlFor="disadv">Недостатки</label>
      <input
        className="form-review__input"
        id="disadv"
        type="text"
        autoComplete="off"
        value={disadvantage}
        onChange={(event) => setDisadvantage(event.target.value)}
      />
      {(disadvantage === '') ? <p className="form-review__warning">Заполните поле</p> : ''}
      <label className={classNames('form-review__label', {'form-review__label--required' : (comment === '')})} htmlFor="comment">Комментарий</label>
      <textarea
        className="form-review__input form-review__input--textarea"
        id="comment"
        autoComplete="off"
        defaultValue={comment}
        onChange={(event) => setComment(event.target.value)}
      >
      </textarea>
      {(comment === '') ? <p className="form-review__warning">Заполните поле</p> : ''}
      <button
        className={`button button--medium-20 form-review__button ${isDisabled ? ' add-review__form-disabled' : ''}`}
        type="submit"
        disabled={isDisabled}
      >
          Отправить отзыв
      </button>
      {sendStatus === 'error' && <span>Oops, something went wrong while submitting your review! Try later!</span>}
    </form>

  );
}

export default AddCommentForm;

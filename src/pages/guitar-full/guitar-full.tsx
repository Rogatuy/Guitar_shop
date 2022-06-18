import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import ModalWindow from '../../components/modal-window/modal-window';
import RatingStars from '../../components/rating-stars/rating-stars';
import { AppRoute, COMMENTS_STEP } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchFullGuitarAction } from '../../store/api-actions';
import { getCommentsList, getCommentsLoadedDataStatus } from '../../store/comments-data/selectors';
import { getGuitarFull, getGuitarFullLoadedDataStatus } from '../../store/guitar-full-data/selectors';
import { getPostComments } from '../../store/post-comment-data-storage/selectors';
import { getSortComment, scrollOnTop } from '../../utils/utils';
import CommentGuitar from './components/comment-guitar/comment-guitar';
import Tabs from './components/tabs/tabs';
import styles from './guitar-full.module.css';

function GuitarFull (): JSX.Element {
  const guitarFull = useAppSelector(getGuitarFull);
  const isDataLoadedGuitarFull = useAppSelector(getGuitarFullLoadedDataStatus);

  const comments = useAppSelector(getCommentsList);
  const isDataLoadedCommentsList = useAppSelector(getCommentsLoadedDataStatus);
  const [commentsCount, setCommentsCount] = useState<number>(COMMENTS_STEP);
  const {id, typeTab} = useParams();
  const currentTab = String(typeTab);
  const guitarId = Number(id);

  const getAllComments = createSelector(
    getPostComments,
    (items) => {
      const currentComments = items.filter((item) => item.guitarId === guitarId);
      return getSortComment([...comments, ...currentComments]);
    },
  );

  const currentSortComments = useSelector(getAllComments);

  const [modalActive, setModalActive] = useState(false);
  const [modalTypeActive, setModalTypeActive] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  useEffect(() => {

    if (guitarFull.id === 0 || guitarFull?.id !== guitarId) {
      dispatch(fetchFullGuitarAction(guitarId));
      dispatch(fetchCommentsAction(guitarId));

    }}, [guitarId, dispatch, guitarFull, navigate]);

  if (guitarFull.id === 0)  {
    if ( !isDataLoadedGuitarFull || !isDataLoadedCommentsList ) {
      return (
        <LoadingScreen />
      );
    }
  }

  if (guitarFull.id === 0 && isDataLoadedGuitarFull && isDataLoadedCommentsList) {
    navigate(AppRoute.NoFoundScreen);
  }

  const handleButtonClick = () => {
    setCommentsCount(commentsCount + Math.min(COMMENTS_STEP, comments.length));
  };

  const handleButtonOpenClick = () => {
    setModalActive(true);
  };

  return (
    <div className="wrapper">
      <Icons/>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">{guitarFull.name}</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={`${AppRoute.Main}`}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={`${AppRoute.Main}`}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={'/#'}>{guitarFull.name}</Link>
            </li>
          </ul>
          <div className="product-container">
            <img className="product-container__img" src={`../../${guitarFull.previewImg}`} width="90" height="235" alt={guitarFull.name} />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{guitarFull.name}</h2>
              <RatingStars
                rating = {guitarFull.rating}
                commentsCount = {currentSortComments.length}
              />
              <Tabs guitar={guitarFull} currentTab={currentTab} />
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitarFull.price} ₽</p>
              <Link  className="button button--red button--big product-container__button" to={'/#'}>Добавить в корзину</Link>
            </div>
          </div>
          <section className="reviews">
            <h3 className="reviews__title title title--bigger">Отзывы</h3>
            <Link className="button button--red-border button--big reviews__sumbit-button" to="#" onClick={handleButtonOpenClick}>Оставить отзыв</Link>
            <ModalWindow
              active={modalActive}
              setActive={setModalActive}
              modalTypeActive={modalTypeActive}
              setModalTypeActive={setModalTypeActive}
              guitar={guitarFull}
            />
            {currentSortComments.slice(0, commentsCount).map((commentGuitar) => (
              <CommentGuitar
                key={commentGuitar.id}
                comment={commentGuitar}
              />
            ))}
            {currentSortComments.length > commentsCount &&
            <button className="button button--medium reviews__more-button" onClick={handleButtonClick}>Показать еще отзывы</button>}
            <button className={`${styles.underBackground} button button--up button--red-border button--big reviews__up-button`} onClick={scrollOnTop}>Наверх</button>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default GuitarFull;

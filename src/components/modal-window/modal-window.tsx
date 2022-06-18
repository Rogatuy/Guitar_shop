import { useEffect } from 'react';
import { Guitar } from '../../types/guitar';
import AddCommentForm from './components/add-comment-form/add-comment-form';
import FocusLock from 'react-focus-lock';

type ModalWindowProps = {
    active: boolean;
    modalTypeActive: boolean;
    setActive: (click: boolean) => void;
    setModalTypeActive: (click: boolean) => void;
    guitar: Guitar;
};

function ModalWindow({active, modalTypeActive, setModalTypeActive, setActive, guitar}: ModalWindowProps): JSX.Element {


  useEffect (() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      const closeModal = (event: { key: string; }) => {
        if(event.key === 'Escape') {
          setActive(false);
          setModalTypeActive(false);
        }
      };

      window.addEventListener('keydown', closeModal);

      return () => {
        document.body.style.overflow = 'visible';
        window.removeEventListener('keydown', closeModal);
      };
    }}, [active, setActive, setModalTypeActive]);

  const handleClickOverlay = () => {
    setActive(false);
    setModalTypeActive(false);
  };

  if (!active) {
    return (
      <>
      </>);
  }

  return (
    (active && !modalTypeActive)
      ? (
        <FocusLock>
          <div className="is-active modal modal-review">
            <div className="modal__wrapper">
              <div className="modal__overlay " data-close-modal="" onClick={handleClickOverlay}></div>
              <div className="modal__content">
                <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
                <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
                <AddCommentForm
                  guitar={guitar}
                  modalTypeActive={modalTypeActive}
                  setModalTypeActive={setModalTypeActive}
                />
                <button
                  className="modal__close-btn button-cross"
                  type="button"
                  aria-label="Закрыть"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <span className="button-cross__icon"></span>
                  <span className="modal__close-btn-interactive-area"></span>
                </button>
              </div>
            </div>
          </div>
        </FocusLock>
      )
      : (
        <FocusLock>
          <div className="modal is-active modal--success modal-for-ui-kit">
            <div className="modal__wrapper">
              <div className="modal__overlay " data-close-modal="" onClick={handleClickOverlay}></div>
              <div className="modal__content">
                <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-success"></use>
                </svg>
                <p className="modal__message">Спасибо за ваш отзыв!</p>
                <div className="modal__button-container modal__button-container--review">
                  <button
                    className="button button--small modal__button modal__button--review"
                    onClick={() => {
                      setActive(!active);
                      setModalTypeActive(!modalTypeActive);
                    }}
                  >К покупкам!
                  </button>
                </div>
                <button
                  className="modal__close-btn button-cross"
                  type="button"
                  aria-label="Закрыть"
                  onClick={() => {
                    setActive(!active);
                    setModalTypeActive(!modalTypeActive);
                  }}
                >
                  <span className="button-cross__icon"></span>
                  <span className="modal__close-btn-interactive-area"></span>
                </button>
              </div>
            </div>
          </div>
        </FocusLock>
      )
  );
}


export default ModalWindow;

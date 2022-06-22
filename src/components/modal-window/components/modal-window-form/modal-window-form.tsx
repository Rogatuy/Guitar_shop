import { Guitar } from '../../../../types/guitar';
import AddCommentForm from '../add-comment-form/add-comment-form';
import FocusLock from 'react-focus-lock';

type ModalWindowFormProps = {
    guitar: Guitar;
    modalTypeActive: boolean;
    setModalTypeActive:  (click: boolean) => void;
    handleClickOverlay:  () => void;
    setActive:  (click: boolean) => void;
    active: boolean;
  }


function ModalWindowForm({guitar, modalTypeActive, setModalTypeActive, handleClickOverlay, setActive, active}: ModalWindowFormProps): JSX.Element {
  return (
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
  );
}

export default ModalWindowForm;


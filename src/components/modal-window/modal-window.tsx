import { useEffect } from 'react';
import { Guitar } from '../../types/guitar';
import ModalWindowForm from './components/modal-window-form/modal-window-form';
import ModalWindowSuccess from './components/modal-window-success/modal-window-success';

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
        <ModalWindowForm
          guitar={guitar}
          modalTypeActive={modalTypeActive}
          setModalTypeActive={setModalTypeActive}
          handleClickOverlay={handleClickOverlay}
          setActive={setActive}
          active={active}
        />
      )
      : (
        <ModalWindowSuccess
          modalTypeActive={modalTypeActive}
          setModalTypeActive={setModalTypeActive}
          handleClickOverlay={handleClickOverlay}
          setActive={setActive}
          active={active}
        />
      )
  );
}


export default ModalWindow;

import style from './ModalButton.module.scss';

import React from 'react';

interface ModalButtonProp {
  text: string;
  onClick: () => void;
}

const ModalButton = ({ text, onClick }: ModalButtonProp) => {
  return (
    <>
      <button type="button" className={style.modalButton} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ModalButton;

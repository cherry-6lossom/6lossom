import style from './WriteMessagePage.module.scss';

import React from 'react';

import ModalButton from '@/components/ModalButton/ModalButton';

interface ModalButtonListProp {
  firstText: string;
  secondText: string;
  firstClick: () => void;
  secondClick: () => void;
}

const ModalButtonList = ({
  firstText,
  secondText,
  firstClick,
  secondClick,
}: ModalButtonListProp) => {
  return (
    <>
      <div className={style.modalButtonContainer}>
        <ModalButton text={firstText} onClick={firstClick} />
        <ModalButton text={secondText} onClick={secondClick} />
      </div>
    </>
  );
};

export default ModalButtonList;

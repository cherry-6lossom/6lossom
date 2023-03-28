import style from './WriteMessagePage.module.scss';

import ModalButton from '@/components/ModalButton/ModalButton';

const ModalButtonList = ({
  firstText,
  secondText,
  firstClick,
  secondClick,
}) => {
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

import ModalButton from '@/components/ModalButton/ModalButton';
import style from './WriteMessagePage.module.scss';

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

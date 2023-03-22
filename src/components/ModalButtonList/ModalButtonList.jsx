import ModalButton from '../ModalButton/ModalButton';
import styles from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
// import styles from '@/components/ModalButtonList/ModalButtonList.module.scss';

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

import styles from '@/components/ModalButton/ModalButton.module.scss';

const ModalButton = ({ text, onClick }) => {
  return (
    <>
      <button className={styles.modalButton} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ModalButton;

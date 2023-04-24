import style from './ModalButton.module.scss';

const ModalButton = ({ text, onClick }) => {
  return (
    <>
      <button type="button" className={style.modalButton} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default ModalButton;

import style from './LongButton.module.scss';

const LongButton = ({ text, disabled = false, onClick }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={style.longButton}
      >
        {text}
      </button>
    </>
  );
};

export default LongButton;

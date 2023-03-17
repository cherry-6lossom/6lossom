import style from './LongButton.module.scss';

const LongButton = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={style.longButton}>
        {text}
      </button>
    </>
  );
};

export default LongButton;

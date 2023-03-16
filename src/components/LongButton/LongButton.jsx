import style from './LongButton.module.scss';

const LongButton = ({ text }) => {
  return (
    <>
      <button className={style.longButton}>{text}</button>
    </>
  );
};

export default LongButton;

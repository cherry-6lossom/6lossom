import LongButton from '@/components/LongButton/LongButton';
import style from './LongButtonList.module.scss';

const LongButtonList = ({ firstText, firstClick, secondText, secondClick }) => {
  return (
    <div className={style.LongButtonContainer}>
      <LongButton text={firstText} onClick={firstClick} />
      <LongButton text={secondText} onClick={secondClick} />
    </div>
  );
};

export default LongButtonList;

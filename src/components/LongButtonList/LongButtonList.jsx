import LongButton from '@/components/LongButton/LongButton';
import style from './LongButtonList.module.scss';

const LongButtonList = ({ firstText, secondText }) => {
  return (
    <div className={style.LongButtonContainer}>
      <LongButton text={firstText} />
      <LongButton text={secondText} />
    </div>
  );
};

export default LongButtonList;

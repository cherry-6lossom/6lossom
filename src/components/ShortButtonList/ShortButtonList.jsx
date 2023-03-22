import ShortButton from './../ShortButton/ShortButton';
import style from '@/components/ShortButtonList/ShortButtonList.module.scss';

const ShortButtonList = ({
  firstText,
  firstClick,
  secondText,
  secondClick,
}) => {
  return (
    <div className={style.ShortButtonList}>
      <ShortButton onClick={firstClick} text={firstText} />
      <ShortButton onClick={secondClick} text={secondText} />
    </div>
  );
};

export default ShortButtonList;

import ShortButton from './../ShortButton/ShortButton';
import style from '@/pages/MakeTreePage/MakeTreePage.module.scss';

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

import ShortButton from './../ShortButton/ShortButton';
import style from '@/pages/MakeTreePage/MakeTreePage.module.scss';

const ShortButtonList = ({ firstText, secondText }) => {
  return (
    <div className={style.ShortButtonList}>
      <ShortButton text={firstText} />
      <ShortButton text={secondText} />
    </div>
  );
};

export default ShortButtonList;

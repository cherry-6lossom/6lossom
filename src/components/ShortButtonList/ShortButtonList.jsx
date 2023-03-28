import style from './ShortButtonList.module.scss';

import ShortButton from '@/components/ShortButton/ShortButton';

const ShortButtonList = ({
  firstText,
  firstClick,
  secondText,
  secondClick,
  type,
}) => {
  return (
    <div className={style.ShortButtonList}>
      <ShortButton onClick={firstClick} text={firstText} />
      <ShortButton
        onClick={secondClick ? secondClick : null}
        text={secondText}
        type={type}
      />
    </div>
  );
};

export default ShortButtonList;

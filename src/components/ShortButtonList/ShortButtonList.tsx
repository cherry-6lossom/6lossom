import style from './ShortButtonList.module.scss';

import React from 'react';

import ShortButton from '@/components/ShortButton/ShortButton';

interface ShortButtonListProp {
  firstText:string;
  secondText:string;
  firstClick:()=> void;
  secondClick?:()=>void;
  type?:'button'|'submit';
}

const ShortButtonList = ({
  firstText,
  firstClick,
  secondText,
  secondClick,
  type,
}:ShortButtonListProp) => {
  return (
    <div className={style.ShortButtonList}>
      <ShortButton onClick={firstClick} text={firstText} />
      <ShortButton
        onClick={secondClick}
        text={secondText}
        type={type}
      />
    </div>
  );
};

export default ShortButtonList;

import style from './LongButtonList.module.scss';

import React from 'react';

import LongButton from '@/components/LongButton/LongButton';

interface LongButtonListProp {
  firstText: string;
  secondText: string;
  disabled?: boolean;
  firstClick: () => void;
  secondClick: () => void;
}

const LongButtonList = ({
  firstText,
  firstClick,
  disabled,
  secondText,
  secondClick,
}: LongButtonListProp) => {
  return (
    <div className={style.LongButtonContainer}>
      <LongButton text={firstText} disabled={disabled} onClick={firstClick} />
      <LongButton text={secondText} onClick={secondClick} />
    </div>
  );
};

export default LongButtonList;

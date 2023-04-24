import style from './LongButton.module.scss';

import React from 'react';

interface LongButtonProp {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const LongButton = ({ text, disabled = false, onClick }: LongButtonProp) => {
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={style.longButton}
      >
        {text}
      </button>
    </>
  );
};

export default LongButton;

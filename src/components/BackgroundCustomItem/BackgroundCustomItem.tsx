import { backgroundImageListType } from '@/data/backgroundImageList';
import style from './BackgroundCustomItem.module.scss';

import React from 'react';

interface BackgroundCustomItemProp {
  keyId?: number;
  item: backgroundImageListType;
  handleSelect:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}

const BackgroundCustomItem = ({ keyId, item, handleSelect }:BackgroundCustomItemProp) => {
  const { id, smallSrc, alt } = item;
  return (
    <li key={keyId} className={style.backgroundCustomItem}>
      <button
        onClick={handleSelect}
        className={style.backgroundCustomButton}
        type={'button'}
        id={String(id)}
      >
        <img src={smallSrc} alt={alt} />
        <span className={style.backgroundCustomSelectText}>SELECT</span>
      </button>
    </li>
  );
};

export default BackgroundCustomItem;

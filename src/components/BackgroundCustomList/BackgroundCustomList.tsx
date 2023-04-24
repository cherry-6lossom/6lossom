import style from './BackgroundCustomList.module.scss';

import React, { useContext } from 'react';
import { BgContext, ValueType } from '@/pages/MakeTreePage/MakeTreePage';

import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';

const BackgroundCustomList = () => {
  const { backgroundImageList, handleSelect } = useContext<ValueType>(BgContext);
  return (
    <ul className={style.backgroundCustomList}>
      {backgroundImageList.map((item) => (
        <BackgroundCustomItem
          key={item.id}
          item={item}
          handleSelect={handleSelect}
        />
      ))}
    </ul>
  );
};

export default BackgroundCustomList;

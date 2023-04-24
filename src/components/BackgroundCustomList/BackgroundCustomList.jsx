import style from './BackgroundCustomList.module.scss';

import { useContext } from 'react';
import { BgContext } from '@/pages/MakeTreePage/MakeTreePage';

import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';

const BackgroundCustomList = () => {
  const { backgroundImageList, handleSelect } = useContext(BgContext);
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

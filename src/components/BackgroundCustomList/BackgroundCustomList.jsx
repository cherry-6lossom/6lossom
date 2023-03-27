import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';
import style from './BackgroundCustomList.module.scss';
import { useContext } from 'react';
import { BgContext } from '@/pages/MakeTreePage/MakeTreePage';

const BackgroundCustomList = () => {
  const { backgroundImageList, handleSelect } = useContext(BgContext);
  return (
    <div className={style.backgroundCustomList}>
      {backgroundImageList.map((item) => (
        <BackgroundCustomItem
          smallSrc={item.smallSrc}
          id={item.id}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default BackgroundCustomList;

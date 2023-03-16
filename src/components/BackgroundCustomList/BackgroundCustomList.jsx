import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';
import style from '@/pages/MakeTreePage/MakeTreePage.module.scss';
import { useContext } from 'react';
import { BgContext } from '@/pages/MakeTreePage/MakeTreePage';

const BackgroundCustomList = () => {
  const { backgroundImageList, handleSelect } = useContext(BgContext);
  return (
    <div className={style.BackgroundCustomList}>
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

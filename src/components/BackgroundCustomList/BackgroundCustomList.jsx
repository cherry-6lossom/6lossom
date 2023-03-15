import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';
import selectPink from '@/assets/custom/select-bg-pink.png';
import selectNight from '@/assets/custom/select-bg-night.png';
import selectSky from '@/assets/custom/select-bg-sky.png';
import bgPink from '@/assets/custom/bg-pink.png';
import bgNight from '@/assets/custom/bg-night.png';
import bgSky from '@/assets/custom/bg-sky.png';
import style from '@/pages/MakeTreePage/MakeTreePage.module.scss';
import { useState } from 'react';

const backgroundImageList = [
  {
    id: 1,
    bigSrc: bgSky,
    isSelected: false,
    smallSrc: selectSky,
  },
  {
    id: 2,
    bigSrc: bgNight,
    isSelected: false,
    smallSrc: selectNight,
  },
  {
    id: 3,
    bigSrc: bgPink,
    isSelected: false,
    smallSrc: selectPink,
  },
];

const BackgroundCustomList = () => {
  const [selectBg, setSelectBg] = useState('');

  const handleSelect = (e) => {
    const backgoundImage = document.querySelector('.MakeTreePage');
    const buttonElement = e.target.closest('button');

    backgroundImageList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        backgoundImage.style = `background :url(${item.bigSrc}) center no-repeat`;
        return;
      }
    });
  };

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

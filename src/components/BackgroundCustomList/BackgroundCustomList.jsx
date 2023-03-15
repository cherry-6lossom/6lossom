import BackgroundCustomItem from '@/components/BackgroundCustomItem/BackgroundCustomItem';
import bgPink from '@/assets/custom/select-bg-pink.png';
import bgNight from '@/assets/custom/select-bg-night.png';
import bgSky from '@/assets/custom/select-bg-sky.png';
import style from '@/pages/MakeTreePage/MakeTreePage.module.scss';

const backgroundImageList = [
  {
    id: 1,
    src: bgSky,
    isSelected: false,
  },
  {
    id: 2,
    src: bgNight,
    isSelected: false,
  },
  {
    id: 3,
    src: bgPink,
    isSelected: false,
  },
];

const BackgroundCustomList = () => {
  const handleSelect = (e) => {
    console.log(e.target.src);
  };

  return (
    <div className={style.BackgroundCustomList}>
      {backgroundImageList.map((item) => (
        <BackgroundCustomItem
          src={item.src}
          id={item.id}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default BackgroundCustomList;

import selectPink from '@/assets/custom/select-bg-pink.png';
import selectNight from '@/assets/custom/select-bg-night.png';
import selectSky from '@/assets/custom/select-bg-sky.png';

const backgroundImageList = [
  {
    id: 1,
    bigSrc: `${import.meta.env.BASE_URL}assets/bg-sky.png`,
    smallSrc: selectSky,
  },
  {
    id: 2,
    bigSrc: `${import.meta.env.BASE_URL}assets/bg-night.png`,
    smallSrc: selectNight,
  },
  {
    id: 3,
    bigSrc: `${import.meta.env.BASE_URL}assets/bg-pink.png`,
    smallSrc: selectPink,
  },
];

export default backgroundImageList;

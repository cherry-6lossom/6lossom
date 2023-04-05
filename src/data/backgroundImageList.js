import selectPink from '@/assets/custom/select-bg-pink.png';
import selectNight from '@/assets/custom/select-bg-night.png';
import selectSky from '@/assets/custom/select-bg-sky.png';
import bgSky from '@/assets/custom/bg-sky.png';
import bgNight from '@/assets/custom/bg-night.png';
import bgPink from '@/assets/custom/bg-pink.png';

const backgroundImageList = [
  {
    id: 1,
    bigSrc: `bg-sky`,
    smallSrc: selectSky,
    alt: '구름 많고 화창한 하늘 배경 선택하기',
  },
  {
    id: 2,
    bigSrc: `bg-night`,
    smallSrc: selectNight,
    alt: '별 가득한 노을밤 배경 선택하기',
  },
  {
    id: 3,
    bigSrc: `bg-pink`,
    smallSrc: selectPink,
    alt: '구름 많고 핑크로 물든 배경 선택하기',
  },
];

export default backgroundImageList;

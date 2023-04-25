import flower1 from '@/assets/custom/cherry-blossom1.png';
import flower2 from '@/assets/custom/cherry-blossom2.png';
import flower3 from '@/assets/custom/cherry-blossom3.png';
import flower4 from '@/assets/custom/cherry-blossom4.png';

export interface blossomInfoListType {
  id: number;
  src: string;
  img: string;
  alt: string;
}

const blossomInfoList: blossomInfoListType[] = [
  {
    id: 0,
    src: `cherry-blossom1`,
    img: flower1,
    alt: '하트 모양 벚꽃잎의 수술이 있는 벚꽃',
  },
  {
    id: 1,
    src: `cherry-blossom2`,
    img: flower2,
    alt: '둥근 벚꽃잎의 수술이 없는 벚꽃',
  },
  {
    id: 2,
    src: `cherry-blossom3`,
    img: flower3,
    alt: '하트 모양 벚꽃잎의 수술이 동그란 벚꽃',
  },
  {
    id: 3,
    src: `cherry-blossom4`,
    img: flower4,
    alt: '하트 모양 벚꽃잎의 수술이 별 모양인 벚꽃',
  },
];

export default blossomInfoList;

interface blossomInfoListType {
  id:number;
  src:string;
  alt:string;
}

const blossomInfoList:blossomInfoListType[] = [
  {
    id: 0,
    src: `cherry-blossom1`,
    alt: '하트 모양 벚꽃잎의 수술이 있는 벚꽃'
  },
  {
    id: 1,
    src: `cherry-blossom2`,
    alt: '둥근 벚꽃잎의 수술이 없는 벚꽃'
  },
  {
    id: 2,
    src: `cherry-blossom3`,
    alt: '하트 모양 벚꽃잎의 수술이 동그란 벚꽃'
  },
  {
    id: 3,
    src: `cherry-blossom4`,
    alt: '하트 모양 벚꽃잎의 수술이 별 모양인 벚꽃'
  },
];

export default blossomInfoList;

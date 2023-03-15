import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReadData } from '@/firebase/firestore/useReadData';
import style from './MakeTreePage.module.scss';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';

import blossomTree from '@/assets/main-page/main-tree.png';
import BackgroundCustomList from '@/components/BackgroundCustomList/BackgroundCustomList';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';

const MakeTreePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <div className={style.makeTreeContainer}>
        <header className={style.makeTreeHeader}>
          <UsageDescription subText={'벚꽃나무에 이름을 적어주세요'} />
          <HeaderTitle
            mainText={`${displayName ? displayName + '님의 벚꽃나무' : ''}`}
          />
        </header>
        <button onClick={logout}>Logout</button>
        <div className={style.blossomTree}>
          <img src={blossomTree} alt="벚꽃나무" />
        </div>
        <div className={style.makeTreeCustom}>
          <UsageDescription
            makeTreeCustomText={'makeTreeCustomText'}
            subText={'벚꽃나무의 하늘을 선택해주세요.'}
          />
          <BackgroundCustomList />
          <ShortButtonList firstText={'취소'} secondText={'완료'} />
        </div>
      </div>
    </>
  );
};

export default MakeTreePage;

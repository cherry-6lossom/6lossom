import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import blossomTree from '@/assets/main-page/main-tree.png';
import BackgroundCustomList from '@/components/BackgroundCustomList/BackgroundCustomList';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';

import classNames from 'classnames';
import style from './MakeTreePage.module.scss';
import selectPink from '@/assets/custom/select-bg-pink.png';
import selectNight from '@/assets/custom/select-bg-night.png';
import selectSky from '@/assets/custom/select-bg-sky.png';
import bgPink from '@/assets/custom/bg-pink.png';
import bgNight from '@/assets/custom/bg-night.png';
import bgSky from '@/assets/custom/bg-sky.png';

import { useUpdateData } from '@/firebase/firestore/useUpdateData';
import { useReadData } from '@/firebase/firestore/useReadData';

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

export const BgContext = createContext();

const MakeTreePage = () => {
  const [selectBg, setSelectBg] = useState(
    JSON.stringify('/src/assets/custom/bg-pink.png')
  );

  useEffect(() => {
    localStorage.setItem('bgSrc', selectBg);
  }, []);

  const handleSelect = (e) => {
    const backgoundImage = document.querySelector('.MakeTreePage');
    const buttonElement = e.target.closest('button');

    backgroundImageList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        backgoundImage.style = `background :url(${item.bigSrc}) center no-repeat`;
        setSelectBg(item.bigSrc);
        localStorage.setItem('bgSrc', JSON.stringify(item.bigSrc));
        return;
      }
    });
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };
  const value = { backgroundImageList, setSelectBg, handleSelect };

  const displayName = JSON.parse(localStorage.getItem('user'));

  const { updateData } = useUpdateData('users');
  const { readData, data, isLoading, error } = useReadData('users');

  const handleComplete = async () => {
    const bgSrc = JSON.parse(localStorage.getItem('bgSrc'));
    const uid = JSON.parse(localStorage.getItem('uid'));
    const user = JSON.parse(localStorage.getItem('user'));
    updateData(uid, { bgSrc: bgSrc, isMade: true });
    navigate('/share-tree', { replace: true });

    // 뒤로 가기 막기 코드
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  };

  return (
    <BgContext.Provider value={value}>
      <div className={classNames('MakeTreePage', style.makeTreeContainer)}>
        <header className={style.makeTreeHeader}>
          <UsageDescription subText={'벚꽃나무에 이름을 적어주세요'} />
          <HeaderTitle userName={`${displayName ? displayName : ''}`} />
        </header>
        <button onClick={logout}>Logout</button>
        <div className={style.blossomTree}>
          <img src={blossomTree} alt="벚꽃나무" />
        </div>
        <div className={style.makeTreeCustom}>
          <UsageDescription
            className={style.makeTreeCustomText}
            subText={'벚꽃나무의 하늘을 선택해주세요.'}
          />
          <BackgroundCustomList />
          <ShortButtonList
            firstText={'취소'}
            firstClick={logout}
            secondText={'완료'}
            secondClick={handleComplete}
          />
        </div>
      </div>
    </BgContext.Provider>
  );
};

export default MakeTreePage;

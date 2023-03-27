import style from './MakeTreePage.module.scss';
import { createContext, useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UsageDescription from '@/components/UsageDescription/UsageDescription';
import BackgroundCustomList from '@/components/BackgroundCustomList/BackgroundCustomList';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import OriginTree from '@/components/OriginTree/OriginTree';

import classNames from 'classnames';
import selectPink from '@/assets/custom/select-bg-pink.png';
import selectNight from '@/assets/custom/select-bg-night.png';
import selectSky from '@/assets/custom/select-bg-sky.png';
import bgPink from '@/assets/custom/bg-pink.png';
import bgNight from '@/assets/custom/bg-night.png';
import bgSky from '@/assets/custom/bg-sky.png';

import { useUpdateData } from '@/firebase/firestore/useUpdateData';
import { useCallCollection } from '@/firebase/app';

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
  const navigate = useNavigate();

  const { updateData } = useUpdateData('users');

  const [nickname, setNickname] = useState('');
  const [selectBg, setSelectBg] = useState('/src/assets/custom/bg-pink.png');

  const localUid = JSON.parse(localStorage.getItem('uid'));

  // 배경색 선택 이벤트
  const handleSelect = (e) => {
    const backgoundImage = document.querySelector('.MakeTreePage');
    const buttonElement = e.target.closest('button');

    backgroundImageList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        backgoundImage.style = `background: center / cover no-repeat url(${item.bigSrc})`;
        setSelectBg(item.bigSrc);
        return;
      }
    });
  };

  // 완료 버튼 클릭 이벤트
  const handleComplete = () => {
    updateData(localUid, {
      bgSrc: selectBg,
      isMade: true,
      url: `https://localhost:3000/share-tree/${localUid}`,
      userNickname: nickname,
    });

    navigate(`/share-tree/${localUid}`, { replace: true });

    // 뒤로 가기 막기 코드
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  };

  const value = {
    backgroundImageList,
    setSelectBg,
    handleSelect,
  };

  useLayoutEffect(() => {
    useCallCollection('users').then((userList) => {
      userList.map((user) => {
        if (user.uid === localUid && user.isMade) {
          navigate(`/share-tree/${localUid}`);
        }
      });
    });
  }, []);

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <BgContext.Provider value={value}>
      <form
        onSubmit={handleComplete}
        className={classNames('MakeTreePage', style.makeTreeContainer)}
      >
        <header className={style.header}>
          <UsageDescription subText={'벚꽃나무에 이름을 적어주세요'} />
          <div className={style.headerTitle}>
            <input
              type="text"
              name="userNickname"
              value={nickname}
              maxLength={6}
              placeholder="닉네임"
              onChange={handleChange}
              className={style.userNickname}
              required
            />
            <span>님의 벚꽃나무</span>
          </div>
        </header>
        <div className={style.originTreeContainer}>
          <OriginTree className={style.originTree} />
        </div>
        <div className={style.makeTreeCustomContainer}>
          <div className={style.makeTreeCustom}>
            <UsageDescription
              className={style.makeTreeCustomText}
              subText={'벚꽃나무의 하늘을 선택해주세요.'}
            />
            <BackgroundCustomList />
            <ShortButtonList
              firstText={'취소'}
              firstClick={() => {
                window.location.replace('/');
              }}
              secondText={'완료'}
              type={'submit'}
            />
          </div>
        </div>
      </form>
    </BgContext.Provider>
  );
};

export default MakeTreePage;

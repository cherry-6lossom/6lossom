import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

import style from './ShareTreePage.module.scss';

import Header from '@/components/Header/Header';
import OriginTree from '@/components/OriginTree/OriginTree';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import SideMenu from '@/components/SideMenu/SideMenu';

const ShareTreePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { uid } = useParams();
  const userList = JSON.parse(localStorage.getItem('userList'));
  let flowerList;
  let userNickname;

  const localUid = JSON.parse(localStorage.getItem('uid'));
  let localNickname;

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  userList.map((user) => {
    // 공유 페이지의 user
    if (user.uid === uid) {
      userNickname = user.userNickname;
      flowerList = user.flowerList;
    }
    // 현재 로그인한 user
    if (user.uid === localUid) {
      localNickname = JSON.parse(localStorage.getItem('nickname'));
    }
  });

  const location = useLocation();

  const handleMakeMessage = () => {
    let url = `https://localhost:3000${location.pathname}`;

    navigator.clipboard.writeText(url);
  };

  const handleTotalMessage = () => {
    alert('아직 개화시기가 되지 않았습니다.');
  };

  return (
    <div className={style.shareTreeContainer}>
      <Header
        userName={userNickname ? userNickname : localNickname}
        className={style.shareTreeSubTitle}
        subText={`${flowerList.length}송이의 벚꽃이 피었어요 ! `}
      />
      <OriginTree />
      {uid === localUid ? (
        <LongButtonList
          firstText={'링크 공유하기'}
          firstClick={handleMakeMessage}
          secondText={'전체 메세지 보기'}
          secondClick={handleTotalMessage}
        />
      ) : (
        <LongButtonList
          firstText={'벚꽃 달아주기'}
          secondText={'내 벚꽃나무 보러가기'}
        />
      )}
      <div onClick={handleMenuClick}>
        <HamburgerButton />
      </div>
      {isMenuOpen && <SideMenu loginName={localNickname} />}
    </div>
  );
};

export default ShareTreePage;

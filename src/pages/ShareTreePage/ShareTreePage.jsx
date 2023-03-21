import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';

import style from './ShareTreePage.module.scss';

import Header from '@/components/Header/Header';
import OriginTree from '@/components/OriginTree/OriginTree';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import SideMenu from '@/components/SideMenu/SideMenu';
import { db, useCallCollection } from '@/firebase/app';
import { doc, onSnapshot } from 'firebase/firestore';

const ShareTreePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { uid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 공유 트리 페이지의 주인
  const [userNickname, setUserNickname] = useState('');
  const [bgSrc, setBgSrc] = useState('');
  const [flowerList, setFlowerList] = useState([]);

  // 로그인 한 사용자
  const localUid = JSON.parse(localStorage.getItem('uid'));
  const [localNickname, setLocalNickname] = useState('');

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyLink = () => {
    let url = `https://localhost:3000${location.pathname}`;

    navigator.clipboard.writeText(url);

    alert('링크가 복사되었습니다.');
  };

  const handleTotalMessage = () => {
    alert('아직 개화시기가 되지 않았습니다.');
  };

  const handleWatchTree = () => {
    if (localUid) {
      window.location.replace(`/share-tree/${localUid}`);
    } else {
      alert('로그인이 필요합니다.');
      navigate('/');
      localStorage.clear();
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', uid), (doc) => {
      setUserNickname(doc.data().userNickname);
      setBgSrc(doc.data().bgSrc);
      setFlowerList(doc.data().flowerList);
    });

    useCallCollection().then((userList) => {
      userList.map((user) => {
        if (user.uid === localUid) {
          setLocalNickname(user.userNickname);
        }
      });
    });
  }, []);

  return (
    <div
      style={{ background: `url(${bgSrc}) center no-repeat` }}
      className={style.shareTreeContainer}
    >
      <Header
        userName={userNickname}
        className={style.shareTreeSubTitle}
        subText={`${flowerList.length}송이의 벚꽃이 피었어요 ! `}
      />
      <OriginTree />
      {uid === localUid ? (
        <LongButtonList
          firstText={'링크 공유하기'}
          firstClick={handleCopyLink}
          secondText={'전체 메세지 보기'}
          secondClick={handleTotalMessage}
        />
      ) : (
        <LongButtonList
          firstText={'벚꽃 달아주기'}
          secondText={'내 벚꽃나무 보러가기'}
          secondClick={handleWatchTree}
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

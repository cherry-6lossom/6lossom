import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

import style from './ShareTreePage.module.scss';
import rightButton from '@/assets/swiper-button/right.png';
import leftButton from '@/assets/swiper-button/left.png';

import messageContext from '@/contexts/messageContext';
import Header from '@/components/Header/Header';
import OriginTree from '@/components/OriginTree/OriginTree';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import SideMenu from '@/components/SideMenu/SideMenu';
import MessageList from '@/components/MessageList/MessageList';
import MessageDetail from '@/components/MessageDetail/MessageDetail';
import { db, useCallCollection } from '@/firebase/app';
import {
  collection,
  doc,
  getCountFromServer,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import classNames from 'classnames';

const ShareTreePage = () => {
  const [messageListVisible, setMessageListVisible] = useState(false);
  const [messageDetailVisible, setMessageDetailVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { uid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const messageVisibility = useMemo(
    () => ({
      messageListVisible,
      setMessageListVisible,
      messageDetailVisible,
      setMessageDetailVisible,
    }),
    [
      messageListVisible,
      setMessageListVisible,
      messageDetailVisible,
      setMessageDetailVisible,
    ]
  );

  // 공유 트리 페이지의 주인
  const [userNickname, setUserNickname] = useState('');
  const [bgSrc, setBgSrc] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [flowerList, setFlowerList] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [pageTotalCount, setPageTotalCount] = useState(0);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  // 렌더링할 때 6개만 보일 리스트
  const [renderList, setRenderList] = useState([]);
  // 이전 페이지로 돌아가기 위해 생성해 둔 리스트
  const [pageList, setPageList] = useState([]);

  useLayoutEffect(() => {
    getPageTotalCount();
    queryPage(6);
  }, []);

  useLayoutEffect(() => {
    if (flowerList.length === pageTotalCount) {
      setHasNextPage(false);
      setHasPrevPage(true);
    } else if (flowerList.length === 6) {
      setHasNextPage(true);
      setHasPrevPage(false);
    } else {
      setHasNextPage(true);
      setHasPrevPage(true);
    }
  }, [flowerList.length, pageTotalCount]);

  const flowerListRef = collection(db, `users/${uid}/flowerList`);

  const getPageTotalCount = async () => {
    const res = await getCountFromServer(
      query(flowerListRef, orderBy('createdAt', 'asc'))
    );

    setPageTotalCount(res.data().count);
  };

  const queryPage = async (limitCount = 10) => {
    let q;
    if (!lastVisible) {
      q = query(flowerListRef, orderBy('createdAt'), limit(limitCount));
    } else {
      q = query(
        flowerListRef,
        orderBy('createdAt'),
        startAfter(lastVisible),
        limit(limitCount)
      );
    }
    const docSnapshot = await getDocs(q);

    if (isLoading) {
      setIsLoading(false);
    }

    const docs = docSnapshot.docs;
    queryData(docs);
  };

  const queryData = (docs) => {
    const listItem = [];

    docs.forEach((doc) => {
      listItem.push({ id: doc.id, ...doc.data() });
    });

    setFlowerList([...flowerList, ...listItem]);
    setRenderList(listItem);
    setPageList([...pageList, ...[listItem]]);

    let nextDoc = docs[docs.length - 1];
    if (nextDoc) setLastVisible(nextDoc);
  };

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

  const handleOpenMessageList = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;
    const backgroundElement = e.target.parentElement.parentElement.nextSibling;
    const messageListElement = backgroundElement.children[0];

    if (!messageListVisible) {
      messageListElement.classList.add(style.moveIn);
      backgroundElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      backgroundElement.style.zIndex = 101;
      backgroundElement.style.display = 'block';

      setMessageListVisible(!messageListVisible);
      setTimeout(() => {
        messageListElement.classList.remove(style.moveIn);
      }, 900);
    }
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
        subText={`${pageTotalCount}송이의 벚꽃이 피었어요 ! `}
      />
      <div className={style.blossomTreeContainer}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={style.flowerList}>
            <OriginTree />
            <span className={style.pagination}>
              {flowerList.length}/{pageTotalCount}
            </span>
            <button
              className={classNames(style.arrowButton, style.leftButton)}
              disabled={!hasPrevPage}
              onClick={() => queryPage(6)}
            >
              <img src={leftButton} alt="이전 페이지 보기" />
            </button>
            <button
              className={classNames(style.arrowButton, style.rightButton)}
              disabled={!hasNextPage}
              onClick={() => queryPage(6)}
            >
              <img src={rightButton} alt="다음 페이지 보기" />
            </button>
            <ul>
              {renderList.map((item) => (
                <li
                  className={classNames(
                    style.flower,
                    item.id % 6 === 0
                      ? style.flower0
                      : item.id % 6 === 1
                      ? style.flower1
                      : item.id % 6 === 2
                      ? style.flower2
                      : item.id % 6 === 3
                      ? style.flower3
                      : item.id % 6 === 4
                      ? style.flower4
                      : style.flower5
                  )}
                  key={item.id}
                >
                  <button>
                    <img src={item.flowerSrc} alt="벚꽃 메세지" />
                    {item.nickname}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {uid === localUid ? (
        <LongButtonList
          firstText={'링크 공유하기'}
          firstClick={handleCopyLink}
          secondText={'전체 메세지 보기'}
          secondClick={(e) => handleOpenMessageList(e, messageVisibility)}
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
      <messageContext.Provider value={messageVisibility}>
        <MessageList />
        <MessageDetail />
      </messageContext.Provider>
    </div>
  );
};

export default ShareTreePage;

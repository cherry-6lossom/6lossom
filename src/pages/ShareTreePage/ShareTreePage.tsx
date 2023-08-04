import style from './ShareTreePage.module.scss';

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import messageContext from '@/contexts/messageContext';
import flowerContext from '@/contexts/flowerContext';

import classNames from 'classnames';

import { db, useCallCollection } from '@/firebase/app';
import {
  DocumentData,
  DocumentSnapshot,
  Query,
  QueryDocumentSnapshot,
  collection,
  doc,
  endBefore,
  getCountFromServer,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { useSignOut } from '@/firebase/auth/useSignOut';

import Header from '@/components/Header/Header';
import OriginTree from '@/components/OriginTree/OriginTree';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import HamburgerButton from '@/components/HamburgerButton/HamburgerButton';
import SideMenu from '@/components/SideMenu/SideMenu';
import MessageList from '@/components/MessageList/MessageList';
import MessageDetail from '@/components/MessageDetail/MessageDetail';
import Flower from '@/components/Flower/Flower';
import ModalProjectInfo from '@/components/ModalProjectInfo/ModalProjectInfo';
import Notification from '@/components/Notification/Notification';

import loading from '@/assets/loading/Spinner.svg';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

interface UserType {
  userNickname: string;
  createAt: Date;
  bgSrc: string;
  uid: string;
  isMade: boolean;
  email: string;
  displayName: string;
  url: string;
  flowerList: FlowerInfoType[];
}

export interface FlowerInfoType {
  nickname: string;
  contents: string;
  createAt: Date;
  flowerSrc: string;
}

export interface MessageVisibilityType {
  messageListVisible: boolean;
  setMessageListVisible: (messageListVisible: boolean) => void;
  messageDetailVisible: boolean;
  setMessageDetailVisible: (messageDetailVisible: boolean) => void;
}

const ShareTreePage = () => {
  const [messageListVisible, setMessageListVisible] = useState<boolean>(false);
  const [messageDetailVisible, setMessageDetailVisible] =
    useState<boolean>(false);
  const [flowerInfo, setFlowerInfo] = useState<FlowerInfoType>(
    {} as FlowerInfoType
  );

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [localNickname, setLocalNickname] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [bgSrc, setBgSrc] = useState<string>('');

  const [flowerList, setFlowerList] = useState<FlowerInfoType[]>([]);
  const [renderList, setRenderList] = useState<FlowerInfoType[]>([]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [pageTotalCount, setPageTotalCount] = useState<number>(0);
  const [hasPrevPage, setHasPrevPage] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const [msgActive, setMsgActive] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const messageVisibility: MessageVisibilityType = useMemo(
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
  const listBackgroundRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const messageDetailRef = useRef<HTMLDivElement>(null);

  const { uid } = useParams<string>();
  const navigate = useNavigate();

  const flowerListRef = collection(db, `users/${uid}/flowerList`);
  const { signOut } = useSignOut();

  const localUid = JSON.parse(localStorage.getItem('uid') || 'null');
  const today: Date = new Date();

  useLayoutEffect(() => {
    getPageTotalCount();
    queryPage('next');
  }, []);

  useLayoutEffect(() => {
    setHasNextPage(flowerList.length === pageTotalCount ? false : true);
    setHasPrevPage(flowerList.length <= 7 ? false : true);
  }, [flowerList.length, pageTotalCount]);

  useEffect(() => {
    const msgStartDate: Date = new Date(today.getFullYear(), 3, 15); // 4월 15일
    const msgEndDate: Date = new Date(today.getFullYear(), 3, 30); // 4월 29일

    const isMsgActive: boolean = today >= msgStartDate && today <= msgEndDate;

    const startDate: Date = new Date(today.getFullYear(), 2, 15); // 3월 15일
    const endDate: Date = new Date(today.getFullYear(), 3, 15); // 4월 14일
    const isActive: boolean = today >= startDate && today <= endDate;

    setMsgActive(isMsgActive);
    setActive(isActive);

    const unsub = onSnapshot(
      doc(db, `users/${uid}`),
      (doc: DocumentSnapshot<DocumentData>) => {
        setUserNickname(doc.data()?.userNickname);
        setBgSrc(doc.data()?.bgSrc);
      }
    );

    useCallCollection('users').then((userList: UserType[]) => {
      userList.map((user: UserType) => {
        if (user.uid === localUid) {
          setLocalNickname(user.userNickname);
        }
      });
    });

    history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', preventGoBack);

    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  const preventGoBack = () => {
    history.pushState(null, '', window.location.href);
  };

  const getPageTotalCount = async () => {
    const res = await getCountFromServer(
      query(flowerListRef, orderBy('createAt', 'asc'))
    );
    setPageTotalCount(res.data().count);
  };

  const queryPage = async (text: string, limitCount: number = 7) => {
    let q: Query<DocumentData>;
    if (!lastVisible) {
      q = query(flowerListRef, orderBy('createAt', 'asc'), limit(limitCount));
    } else {
      let updateCount =
        flowerList.length % limitCount === 0
          ? flowerList.length - limitCount
          : flowerList.length - (flowerList.length % limitCount);
      q = query(
        flowerListRef,
        orderBy('createAt', 'asc'),
        text === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),

        limit(
          text === 'next'
            ? limitCount
            : updateCount <= limitCount
            ? limitCount
            : updateCount
        )
      );
    }

    const docSnapshot = await getDocs(q);

    if (isLoading) {
      setIsLoading(false);
    }

    const docs: QueryDocumentSnapshot<DocumentData>[] = docSnapshot.docs;
    queryData(docs, text, limitCount);
  };

  const queryData = (
    docs: QueryDocumentSnapshot<DocumentData>[],
    text: string,
    limitCount: number
  ) => {
    const listItem: FlowerInfoType[] = [];

    docs.forEach((doc) => {
      listItem.push({ ...doc.data() } as FlowerInfoType);
    });

    const updateList =
      text === 'next' ? [...flowerList, ...listItem] : listItem;
    setFlowerList(updateList);
    setRenderList(listItem.slice(-limitCount, undefined));

    let nextDoc = docs[docs.length - 1];
    if (nextDoc) setLastVisible(nextDoc);
  };

  const notification = (className: string) => {
    const CopyNotification = document.querySelector(`.${className}`);
    CopyNotification?.classList.add(style.animateNotification);
    setTimeout(() => {
      CopyNotification?.classList.remove(style.animateNotification);
    }, 4000);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyLink = () => {
    let url: string = window.location.href;
    navigator.clipboard.writeText(url);
    notification('targetCheckLinkCopyNotification');
  };

  const handleOpenMessageDetail = (message: FlowerInfoType) => {
    const backgroundElement = messageDetailRef.current as HTMLElement;
    setFlowerInfo(message);

    if (uid !== localUid) {
      notification('targetCheckOwnerNotification');
      return;
    } else if (!msgActive) {
      notification('targetCheckPeriodNotification');
      return;
    }

    if (!messageDetailVisible) {
      backgroundElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      backgroundElement.style.display = 'block';
      backgroundElement.style.zIndex = '102';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

  const handleOpenMessageList = () => {
    const backgroundElement = listBackgroundRef.current as HTMLElement;
    const messageListElement = messageListRef.current as HTMLElement;

    if (!msgActive) {
      notification('targetCheckPeriodNotification');
      return;
    }

    if (!messageListVisible) {
      messageListElement?.classList.add(style.moveIn);
      backgroundElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      backgroundElement.style.display = 'block';
      backgroundElement.style.zIndex = '101';

      setMessageListVisible(!messageListVisible);
      setTimeout(() => {
        messageListElement?.classList.remove(style.moveIn);
      }, 900);
    }
  };

  const handleCreateMessage = () => {
    if (!active) {
      notification('targetCheckCreatableNotification');
    } else {
      navigate(`/message-custom/${uid}`);
    }
  };

  const handleWatchTree = () => {
    if (localUid) {
      window.location.replace(`/share-tree/${localUid}`);
    } else {
      alert('로그인이 필요합니다.');
      signOut();
      localStorage.clear();
      navigate('/');
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <messageContext.Provider value={messageVisibility}>
        <flowerContext.Provider value={{ flowerInfo, setFlowerInfo }}>
          <div
            style={{
              background: `url(/assets/${bgSrc}.png) center / cover no-repeat `,
            }}
            className={style.shareTreeContainer}
          >
            <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
            <Header
              userName={userNickname}
              subText={`${pageTotalCount}송이의 벚꽃이 피었어요 ! `}
            />
            <div className={style.blossomTreeContainer}>
              {isLoading ? (
                <div role="alert">
                  <img src={loading} alt="로딩 중" />
                </div>
              ) : (
                <div className={style.flowerList} aria-live="polite">
                  <div className={style.originTreeContainer}>
                    <OriginTree />
                    <ul>
                      {renderList.map((item) => (
                        <Flower
                          item={item}
                          keyId={renderList.indexOf(item)}
                          id={renderList.indexOf(item)}
                          key={renderList.indexOf(item)}
                          handleOpenMessageDetail={handleOpenMessageDetail}
                        />
                      ))}
                    </ul>
                  </div>
                  <span className={style.pagination}>
                    {flowerList.length}/{pageTotalCount}
                  </span>
                  <div className={style.swiperButton}>
                    <button
                      type="button"
                      aria-label="이전 버튼"
                      className={classNames(
                        style.arrowButton,
                        style.leftButton
                      )}
                      disabled={!hasPrevPage}
                      onClick={() => queryPage('prev')}
                    ></button>
                    <button
                      type="button"
                      aria-label="다음 버튼"
                      className={classNames(
                        style.arrowButton,
                        style.rightButton
                      )}
                      disabled={!hasNextPage}
                      onClick={() => queryPage('next')}
                    ></button>
                  </div>
                </div>
              )}
            </div>
            <div className={style.notificationContainer}>
              <Notification
                className={classNames(
                  'targetCheckOwnerNotification',
                  style.notificationStyling
                )}
                text={'나의 벚꽃나무만 확인이 가능합니다 !'}
              />

              <Notification
                className={classNames(
                  'targetCheckPeriodNotification',
                  style.notificationStyling
                )}
                text={'아직 벚꽃 열람 시기가 아니에요 !'}
              />

              <Notification
                className={classNames(
                  'targetCheckLinkCopyNotification',
                  style.notificationStyling
                )}
                text={'링크가 복사되었습니다 !'}
              />

              <Notification
                className={classNames(
                  'targetCheckCreatableNotification',
                  style.notificationStyling
                )}
                text={'작성기한이 마감되었습니다 !'}
              />
            </div>

            {uid === localUid ? (
              <LongButtonList
                firstText={'링크 공유하기'}
                firstClick={handleCopyLink}
                secondText={'전체 메세지 보기'}
                secondClick={() => handleOpenMessageList()}
              />
            ) : (
              <LongButtonList
                firstText={'벚꽃 달아주기'}
                firstClick={handleCreateMessage}
                secondText={'내 벚꽃나무 보러가기'}
                secondClick={handleWatchTree}
              />
            )}
            <div className={style.hamburgerContainer} onClick={handleMenuClick}>
              <HamburgerButton isMenuOpen={isMenuOpen} />
            </div>
            {isMenuOpen && (
              <SideMenu handleModal={handleModal} loginName={localNickname} />
            )}
          </div>
          {uid === localUid && msgActive ? (
            <>
              <MessageList
                listBackgroundRef={listBackgroundRef}
                messageListRef={messageListRef}
                handleOpenMessageDetail={handleOpenMessageDetail}
              />
              <MessageDetail
                flowerInfo={flowerInfo}
                messageDetailRef={messageDetailRef}
              />
            </>
          ) : null}
        </flowerContext.Provider>
      </messageContext.Provider>
      {modal ? <ModalProjectInfo handleModal={handleModal} /> : null}
    </>
  );
};

export default ShareTreePage;

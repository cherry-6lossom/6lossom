import style from './MessageCustomPage.module.scss';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import messageCustomContext from '@/contexts/messageCustomContext';

import classNames from 'classnames';

import { db, useCallCollection } from '@/firebase/app';
import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

import MessageCustomList from '@/components/MessageCustomList/MessageCustomList';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import Header from '@/components/Header/Header';

import blossomInfoList from '@/data/blossomInfoList';

const MessageCustomPage = () => {
  const [nickname, setNickname] = useState('');
  const [blossomSrc, setBlossomSrc] = useState(`cherry-blossom1`);
  const [pageTotalCount, setPageTotalCount] = useState(0);

  const navigate = useNavigate();
  const { uid } = useParams();

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      setNickname(docSnap.data().userNickname);
      getPageTotalCount();
    })();
  }, []);

  const getPageTotalCount = async () => {
    const flowerListRef = collection(db, `users/${uid}/flowerList`);
    const res = await getCountFromServer(
      query(flowerListRef, orderBy('createAt', 'asc'))
    );

    setPageTotalCount(res.data().count);
  };

  const handleSelect = (e) => {
    const blossomImage = document.querySelector('.blossomImage');
    const buttonElement = e.target.closest('button');

    blossomInfoList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        blossomImage.src = `/assets/${item.src}.png`;
        setBlossomSrc(item.src);
        return;
      }
    });
  };

  const handleNext = async () => {
    const flowerRef = doc(
      db,
      'users',
      uid,
      'flowerList',
      String(pageTotalCount)
    );

    await setDoc(flowerRef, {
      nickname: '',
      contents: '',
      flowerSrc: `${blossomSrc}`,
    });

    navigate(`/write-message/${uid}/${pageTotalCount}`);
  };

  return (
    <messageCustomContext.Provider
      value={{ blossomInfoList, setBlossomSrc, handleSelect }}
    >
      <div className={style.pageSetting}>
        <div className={style.customContainer}>
          <div className={style.header}>
            <Header userName={nickname} subText={'벚꽃을 골라주세요!'} />
          </div>
          <div className={style.blossomMain}>
            <img
              className={classNames('blossomImage', style.blossomImage)}
              src={`/assets/${blossomSrc}.png`}
              alt="벚꽃이미지"
            />
          </div>
          <MessageCustomList className={style.customBlossom} />
        </div>
        <div>
          <ShortButtonList
            firstText={'이전'}
            firstClick={() => navigate(-1)}
            secondText={'다음'}
            secondClick={handleNext}
          />
        </div>
      </div>
    </messageCustomContext.Provider>
  );
};

export default MessageCustomPage;

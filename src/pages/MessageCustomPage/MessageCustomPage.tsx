import style from './MessageCustomPage.module.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import messageCustomContext from '@/contexts/messageCustomContext';

import classNames from 'classnames';

import { db } from '@/firebase/app';
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  orderBy,
  query,
} from 'firebase/firestore';

import MessageCustomList from '@/components/MessageCustomList/MessageCustomList';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import Header from '@/components/Header/Header';

import blossomInfoList, { blossomInfoListType } from '@/data/blossomInfoList';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const MessageCustomPage = () => {
  const [nickname, setNickname] = useState<string>('');
  const [blossomSrc, setBlossomSrc] = useState<string>(`cherry-blossom1`);
  const [pageTotalCount, setPageTotalCount] = useState<number>(0);

  const navigate = useNavigate();
  const { uid } = useParams<string>();

  useEffect(() => {
    (async () => {
      const docRef = doc(db, `users/${uid}`);
      const docSnap = await getDoc(docRef);
      setNickname(docSnap.data()?.userNickname);
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

  const handleSelect = (e: React.TouchEvent<HTMLButtonElement>) => {
    const blossomImage: HTMLDivElement | null =
      document.querySelector('.blossomImage');
    const buttonElement = (e.target as HTMLButtonElement).closest('button');

    blossomInfoList.forEach((item: blossomInfoListType) => {
      if (parseInt(buttonElement?.id ?? '') === item.id) {
        blossomImage?.setAttribute('src ', `/assets/${item.src}.png`);
        setBlossomSrc(item.src);
        return;
      }
    });
  };

  const handleNext = async () => {
    navigate(`/write-message/${uid}/${blossomSrc}`);
  };

  return (
    <messageCustomContext.Provider
      value={{ blossomInfoList, setBlossomSrc, handleSelect }}
    >
      <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
      <div className={style.pageSetting}>
        <div className={style.customContainer}>
          <div className={style.header}>
            <Header userName={nickname} subText={'벚꽃을 골라주세요!'} />
          </div>
          <div className={style.blossomMain}>
            <img
              className={classNames('blossomImage', style.blossomImage)}
              src={`/assets/${blossomSrc}.png`}
              alt={
                blossomInfoList.find(
                  (blossom: blossomInfoListType) => blossom.src === blossomSrc
                )?.alt ?? ''
              }
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

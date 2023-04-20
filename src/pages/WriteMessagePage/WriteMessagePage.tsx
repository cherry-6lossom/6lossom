import style from './WriteMessagePage.module.scss';

import React, { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { db } from '@/firebase/app';
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import blossomInfoList, { blossomInfoListType } from '@/data/blossomInfoList';

interface StateType {
  author: string;
  content: string;
}

const WriteMessagePage = () => {
  const [nickname, setNickname] = useState<string>('');

  const [pageTotalCount, setPageTotalCount] = useState<number>(0);

  const [text, setText] = useState<string>('');
  const [state, setState] = useState<StateType>({
    author: '',
    content: '',
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  const authorInput = useRef<HTMLInputElement>();
  const contentInput = useRef<HTMLTextAreaElement>();

  const { uid, flowerName } = useParams<string>();
  const navigate = useNavigate();

  useLayoutEffect(() => {
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

  const handleChangeState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'content') {
      if (value.length <= 500) {
        setText(value);
      }
    }
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current?.focus();
      return;
    }
    if (state.content.length < 2) {
      contentInput.current?.focus();
      return;
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleComplete = async () => {
    const createAt = serverTimestamp();
    const { author, content } = state;

    const flowerRef = doc(collection(db, `users/${uid}/flowerList`));

    await setDoc(flowerRef, {
      nickname: author,
      contents: content,
      createAt: createAt,
      flowerSrc: `${flowerName}`,
    });

    window.location.replace(`/share-tree/${uid}`);
  };

  return (
    <>
      <div className={style.writeMessageWrap}>
        <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
        <div className={style.header}>
          <HeaderTitle userName={nickname} />
          <img
            className={style.flower}
            src={`/assets/${flowerName}.png`}
            alt={
              blossomInfoList.find(
                (blossom: blossomInfoListType) => blossom.src === flowerName
              )?.alt ?? ''
            }
          />
          <UsageDescription
            className={style.notice}
            subText={`${nickname}님에게 메세지를 남겨주세요`}
          />
        </div>
        <MessageInputContainer
          authorInput={authorInput}
          contentInput={contentInput}
          state={state}
          text={text}
          handleChangeState={handleChangeState}
        />
        <LongButtonList
          firstText={'이전'}
          firstClick={() => navigate(-1)}
          secondText={'완료'}
          secondClick={handleSubmit}
        />
      </div>
      {showModal && (
        <ModalEnroll
          handleCloseModal={handleCloseModal}
          handleComplete={handleComplete}
        />
      )}
    </>
  );
};

export default WriteMessagePage;

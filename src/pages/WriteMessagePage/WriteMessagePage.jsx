import style from './WriteMessagePage.module.scss';

import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames';

import { db, useCallCollection } from '@/firebase/app';
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
import { useUpdateData } from '@/firebase/firestore/useUpdateData';

import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const WriteMessagePage = () => {
  const [nickname, setNickname] = useState('');

  const [pageTotalCount, setPageTotalCount] = useState(0);

  const [text, setText] = useState('');
  const [state, setState] = useState({
    author: '',
    content: '',
  });

  const [showModal, setShowModal] = useState(false);

  const authorInput = useRef();
  const contentInput = useRef();

  const { uid, flowerName } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
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

  const handleChangeState = (e, text) => {
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
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 2) {
      contentInput.current.focus();
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

    const flowerRef = doc(collection(db, 'users', uid, 'flowerList'));

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
            alt={`선택한 벚꽃 모양 이미지`}
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

import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import classes from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import style from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import { db, useCallCollection } from '@/firebase/app';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useUpdateData } from '@/firebase/firestore/useUpdateData';

const WriteMessagePage = () => {
  const { uid, msgId } = useParams();
  const { updateData } = useUpdateData(`users/${uid}/flowerList`);
  const navigate = useNavigate();
  const authorInput = useRef();
  const contentInput = useRef();
  const [nickname, setNickname] = useState('');
  const [state, setState] = useState({
    author: '',
    content: '',
  });
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [flowerSrc, setFlowerSrc] = useState('');

  useCallCollection(`users/${uid}/flowerList`).then((flowerList) => {
    setFlowerSrc(flowerList[msgId].flowerSrc);
  });

  useLayoutEffect(() => {
    (async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      setNickname(docSnap.data().userNickname);
    })();
  }, []);

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

  const handleComplete = () => {
    const createAt = serverTimestamp();
    const { author, content } = state;

    updateData(msgId, {
      nickname: author,
      contents: content,
      createAt: createAt,
    });

    window.location.replace(`/share-tree/${uid}`);

    // 뒤로 가기 막기 코드
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  };

  return (
    <>
      <div className={classes.writeMessageWrap}>
        <div className={classes.header}>
          <HeaderTitle userName={nickname} />
          <img className={classes.flower} src={flowerSrc} alt="벚꽃이미지" />
          <UsageDescription
            className={classes.notice}
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
          firstText={'완료'}
          firstClick={handleSubmit}
          secondText={'이전'}
          secondClick={() => navigate(-1)}
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

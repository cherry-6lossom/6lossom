import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import classes from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import style from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import LongButtonList from '@/components/LongButtonList/LongButtonList';
import Header from '@/components/Header/Header';

const WriteMessagePage = () => {
  const handlePrev = () => {};
  const handleMakeMsg = () => {};
  const navigate = useNavigate();
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
  });
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

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
    navigate('/');
  };

  return (
    <>
      <div className={classes.writeMessageWrap}>
        <div>
          <Header
            className={classes.notice}
            subText={'님에게 메세지를 남겨주세요'}
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

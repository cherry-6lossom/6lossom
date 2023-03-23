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

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [text, setText] = useState('');
  const handleChangeText = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 500) {
      setText(inputValue);
    }
  };
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div className={classes.writeMessageWrap}>
      {showModal && <ModalEnroll handleCloseModal={handleCloseModal} />}

      <header className={classes.writeMessageHeader}>
        <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
        <UsageDescription
          className={classNames(classes.notice)}
          subText={'님에게 메세지를 남겨주세요'}
        />
      </header>
      <MessageInputContainer
        authorOnChange={handleChangeState}
        contentOnChange={(e) => {
          handleChangeState(e), handleChangeText(e);
        }}
      />
      <LongButtonList
        firstText={'완료'}
        firstClick={handleSubmit}
        secondText={'이전'}
        secondClick={() => navigate(-1)}
      />
    </div>
  );
};

export default WriteMessagePage;

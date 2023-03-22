import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
import { useState, useRef } from 'react';
import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import LongButtonList from './../LongButtonList/LongButtonList';

const MessageInputContainer = () => {
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
    <>
      <ModalEnroll show={showModal} onClose={handleCloseModal} />
      <div className={classes.messageInputContainer}>
        <div className={classes.messageWrap}>
          <div className={classes.authorContainer}>
            <input
              className={classes.author}
              name="author"
              placeholder="작성자이름을 적어주세요"
              type="text"
              value={state.author}
              onChange={handleChangeState}
              ref={authorInput}
              maxLength={15}
            />
          </div>
          <div className={classes.contentContainer}>
            <textarea
              className={classes.content}
              name="content"
              placeholder="메세지를 작성해주세요"
              type="text"
              value={state.content}
              onChange={(e) => {
                handleChangeState(e);
                handleChangeText(e);
              }}
              ref={contentInput}
              maxLength={500}
            />
          </div>
          <p className={classes.textLength}>{text.length} / 500</p>
        </div>
        <LongButtonList
          firstText={'완료'}
          firstClick={handleSubmit}
          secondText={'이전'}
          secondClick={() => alert('버튼 테스트 ')}
        />
      </div>
    </>
  );
};

export default MessageInputContainer;

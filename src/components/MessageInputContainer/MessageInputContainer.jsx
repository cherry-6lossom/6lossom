import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
// import LongButton from '@/LongButton/LongButton';
import { useState, useRef } from 'react';
import UsageDescription from '../UsageDescription/UsageDescription';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
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

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    console.log(state);
    alert('저장성공');
  };

  return (
    <>
      <div className={classes.messageWrap}>
        <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
        <HeaderTitle />
        <UsageDescription
          makeTreeCustomText={'makeTreeCustomText'}
          subText={'메세지를 남겨주세요'}
        />
        <div className={classes.authorContainer}>
          <input
            className={classes.nickname}
            name="author"
            placeholder="작성자이름을 적어주세요"
            type="text"
            value={state.author}
            onChange={handleChangeState}
            ref={authorInput}
          />
        </div>
        <div className={classes.contentContainer}>
          <textarea
            className={classes.message}
            name="content"
            placeholder="메세지를 작성해주세요"
            type="text"
            value={state.content}
            onChange={handleChangeState}
            ref={contentInput}
          />
        </div>
        <button onClick={handleSubmit}>완료</button>
      </div>
    </>
  );
};

export default MessageInputContainer;

import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
import { useState, useRef } from 'react';

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

  return (
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
          <p>{text.length} / 500</p>
        </div>
      </div>
    </div>
  );
};

export default MessageInputContainer;

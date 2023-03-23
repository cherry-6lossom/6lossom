import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
import { useState, useRef } from 'react';
import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import LongButtonList from './../LongButtonList/LongButtonList';

const MessageInputContainer = ({
  authorInput,
  contentInput,
  state,
  text,
  handleChangeState,
}) => {
  const [showModal, setShowModal] = useState(false);

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
            onChange={handleChangeState}
            ref={contentInput}
            maxLength={500}
          />
        </div>
        <p className={classes.textLength}>{text.length} / 500</p>
      </div>
    </div>
  );
};

export default MessageInputContainer;

import style from './MessageInputContainer.module.scss';

import { useState, useRef } from 'react';

import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import LongButtonList from '@/components/LongButtonList/LongButtonList';

const MessageInputContainer = ({
  authorInput,
  contentInput,
  state,
  text,
  handleChangeState,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={style.messageInputContainer}>
      <div className={style.messageWrap}>
        <div className={style.authorContainer}>
          <input
            className={style.author}
            name="author"
            placeholder="작성자이름을 적어주세요"
            type="text"
            value={state.author}
            onChange={handleChangeState}
            ref={authorInput}
            maxLength={6}
          />
        </div>
        <div className={style.contentContainer}>
          <textarea
            aria-label="메세지를 작성해주세요"
            className={style.content}
            name="content"
            placeholder="메세지를 작성해주세요"
            type="text"
            value={state.content}
            onChange={handleChangeState}
            ref={contentInput}
            maxLength={500}
          />
        </div>
        <p className={style.textLength}>{text.length} / 500</p>
      </div>
    </div>
  );
};

export default MessageInputContainer;

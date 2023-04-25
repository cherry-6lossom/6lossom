import style from './MessageInputContainer.module.scss';

import React, { LegacyRef } from 'react';

import { A11yHidden } from '../A11yHidden/A11yHidden';

interface MessageInputContainerProp {
  authorInput: LegacyRef<HTMLInputElement>;
  contentInput: LegacyRef<HTMLTextAreaElement>;
  state: {
    author: string;
    content: string;
  };
  text: string;
  handleChangeState: (e: React.ChangeEvent<HTMLElement>) => void;
}

const MessageInputContainer = ({
  authorInput,
  contentInput,
  state,
  text,
  handleChangeState,
}: MessageInputContainerProp) => {
  return (
    <div className={style.messageInputContainer}>
      <div className={style.messageWrap}>
        <div className={style.authorContainer}>
          <A11yHidden as="label" htmlFor="nickname">
            닉네임
          </A11yHidden>
          <input
            id="nickname"
            className={style.author}
            name="author"
            placeholder="작성자 이름을 적어주세요"
            type="text"
            value={state.author}
            onChange={handleChangeState}
            ref={authorInput}
            maxLength={6}
          />
        </div>
        <div className={style.contentContainer}>
          <textarea
            aria-label="메세지 작성하기"
            className={style.content}
            name="content"
            placeholder="메세지를 작성해주세요"
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

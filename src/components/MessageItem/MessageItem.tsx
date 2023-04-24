import style from './MessageItem.module.scss';

import React from 'react';

import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import { FlowerInfoType } from '@/pages/ShareTreePage/ShareTreePage';

interface MessageItemProp {
  flower: FlowerInfoType;
  id: number;
  handleOpenMessageDetail: (flower: FlowerInfoType) => void;
}

const MessageItem = ({
  flower,
  id,
  handleOpenMessageDetail,
}: MessageItemProp) => {
  const { nickname, contents } = flower;

  return (
    <li
      key={id}
      className={style.messageItemContainer}
      onClick={() => handleOpenMessageDetail(flower)}
    >
      <div className={style.messageItem}>
        <div className={style.messageSender}>
          <div className={style.messageIcon}></div>
          {nickname}
        </div>
        <div className={style.messageContentsContainer}>
          <p className={style.messageContents}>{contents}</p>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;

import style from './MessageItem.module.scss';

import { useContext } from 'react';

import messageContext from '@/contexts/messageContext';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const MessageItem = ({ flower, id, handleOpenMessageDetail }) => {
  const messageVisibility = useContext(messageContext);

  const { nickname, contents } = flower;

  return (
    <li
      key={id}
      className={style.messageItemContainer}
      onClick={() => handleOpenMessageDetail(messageVisibility, flower)}
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

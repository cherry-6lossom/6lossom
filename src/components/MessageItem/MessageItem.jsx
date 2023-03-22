import style from './MessageItem.module.scss';
import { useContext } from 'react';
import messageContext from '@/contexts/messageContext';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const MessageItem = ({ flower, handleOpenMessageDetail }) => {
  const messageVisibility = useContext(messageContext);
  const { nickname, contents } = flower;

  return (
    <>
      <li
        className={style.messageItemContainer}
        onClick={() => handleOpenMessageDetail(messageVisibility, flower)}
      >
        <div className={style.messageItem}>
          <div className={style.messageSender}>
            <figure className={style.messageIcon}>
              <A11yHidden as={'figcaption'}>
                하트가 그려진 편지를 담은 우편지 모양의 아이콘입니다.
              </A11yHidden>
            </figure>
            {nickname}
          </div>
          <div className={style.messageContentsContainer}>
            <p className={style.messageContents}>{contents}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default MessageItem;

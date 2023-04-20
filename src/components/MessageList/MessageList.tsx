import style from './MessageList.module.scss';

import React, { RefObject, useContext, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCallCollection } from '@/firebase/app';

import MessageItem from '@/components/MessageItem/MessageItem';
import messageContext from '@/contexts/messageContext';
import {
  FlowerInfoType,
  MessageVisibilityType,
} from '@/pages/ShareTreePage/ShareTreePage';

interface MessageListProp {
  listBackgroundRef: RefObject<HTMLDivElement>;
  messageListRef: RefObject<HTMLDivElement>;
  handleOpenMessageDetail: (flower: FlowerInfoType) => void;
}

const MessageList = ({
  listBackgroundRef,
  messageListRef,
  handleOpenMessageDetail,
}: MessageListProp) => {
  const [flowerList, setFlowerList] = useState<FlowerInfoType[]>([]);

  const { uid } = useParams<string>();
  const messageVisibility = useContext<MessageVisibilityType>(messageContext);

  const backgroundElement = listBackgroundRef?.current;
  const messageListElement = messageListRef?.current;
  const { messageListVisible, setMessageListVisible } = messageVisibility;

  useLayoutEffect(() => {
    useCallCollection(`users/${uid}/flowerList`).then((res) => {
      setFlowerList(res.sort((a, b) => a.createdAt - b.createdAt));
    });
  }, []);

  const handleCloseMessageListWithBackground = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const clickedTarget = e.target;

    if (backgroundElement === clickedTarget && messageListVisible) {
      messageListElement?.classList.add(style.moveOut);
      setTimeout(() => {
        backgroundElement.style.backgroundColor = '';
        backgroundElement.style.zIndex = '';
        backgroundElement.style.display = '';

        setMessageListVisible(!messageListVisible);
        messageListElement?.classList.remove(style.moveOut);
      }, 400);
    }
  };

  const handleCloseMessageListWithButton = () => {
    if (messageListVisible) {
      messageListElement?.classList.add(style.moveOut);
      setTimeout(() => {
        (backgroundElement as HTMLDivElement).style.backgroundColor = '';
        (backgroundElement as HTMLDivElement).style.zIndex = '';
        (backgroundElement as HTMLDivElement).style.display = '';

        setMessageListVisible(!messageListVisible);
        messageListElement?.classList.remove(style.moveOut);
      }, 400);
    }
  };

  return (
    <div
      ref={listBackgroundRef}
      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
        handleCloseMessageListWithBackground(e)
      }
      className={style.messageListBackground}
    >
      <div ref={messageListRef} className={style.messageListWrapper}>
        <div className={style.messageListContainer}>
          <div className={style.messageList}>
            <ul className={style.MessageItemWrapper}>
              {flowerList.map((flower: FlowerInfoType) => (
                <MessageItem
                  id={flowerList.indexOf(flower)}
                  key={flowerList.indexOf(flower)}
                  flower={flower}
                  handleOpenMessageDetail={handleOpenMessageDetail}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => handleCloseMessageListWithButton()}
            className={style.closeButton}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default MessageList;

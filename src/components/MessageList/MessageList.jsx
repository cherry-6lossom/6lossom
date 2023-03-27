import style from './MessageList.module.scss';
import { useContext, useLayoutEffect, useRef, useState } from 'react';
import MessageItem from '@/components/MessageItem/MessageItem';
import messageContext from '@/contexts/messageContext';
import { useCallCollection } from '@/firebase/app';
import { useParams } from 'react-router-dom';

const MessageList = ({
  listBackgroundRef,
  messageListRef,
  messageDetailRef,
  handleOpenMessageDetail,
}) => {
  const messageVisibility = useContext(messageContext);
  const backgroundElement = listBackgroundRef.current;
  const messageListElement = messageListRef.current;
  const { uid } = useParams();
  const [flowerList, setFlowerList] = useState([]);

  useLayoutEffect(() => {
    useCallCollection(`users/${uid}/flowerList`).then((res) => {
      setFlowerList(res.sort((a, b) => a.createdAt - b.createdAt));
    });
  }, []);

  const handleCloseMessageListWithButton = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;

    if (messageListVisible) {
      messageListElement.classList.add(style.moveOut);
      setTimeout(() => {
        backgroundElement.style.backgroundColor = '';
        backgroundElement.style.zIndex = '';
        backgroundElement.style.display = '';

        setMessageListVisible(!messageListVisible);
        messageListElement.classList.remove(style.moveOut);
      }, 400);
    }
  };

  const handleCloseMessageListWithBackground = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;
    const clickedTarget = e.target;

    if (backgroundElement === clickedTarget && messageListVisible) {
      messageListElement.classList.add(style.moveOut);
      setTimeout(() => {
        backgroundElement.style.backgroundColor = '';
        backgroundElement.style.zIndex = '';
        backgroundElement.style.display = '';

        setMessageListVisible(!messageListVisible);
        messageListElement.classList.remove(style.moveOut);
      }, 400);
    }
  };
  return (
    <div
      ref={listBackgroundRef}
      onClick={(e) =>
        handleCloseMessageListWithBackground(e, messageVisibility)
      }
      className={style.messageListBackground}
    >
      <div ref={messageListRef} className={style.messageListWrapper}>
        <div className={style.messageListContainer}>
          <div className={style.messageList}>
            <ul className={style.MessageItemWrapper}>
              {flowerList.map((flower) => (
                <MessageItem
                  flower={flower}
                  handleOpenMessageDetail={handleOpenMessageDetail}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={(e) =>
              handleCloseMessageListWithButton(e, messageVisibility)
            }
            className={style.closeButton}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default MessageList;

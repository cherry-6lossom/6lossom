import style from './MessageList.module.scss';
import { useContext } from 'react';
import MessageItem from '@/components/MessageItem/MessageItem';
import messageContext from '@/contexts/messageContext';

const MessageList = () => {
  const messageVisibility = useContext(messageContext);

  const handleCloseMessageListWithButton = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;
    const messageListElement = e.target.parentElement.parentElement;
    const backgroundElement = messageListElement.parentElement;

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
    const backgroundElement = e.currentTarget;
    const messageListElement = backgroundElement.children[0];

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
      onClick={(e) =>
        handleCloseMessageListWithBackground(e, messageVisibility)
      }
      className={style.messageListBackground}
    >
      <div className={style.messageListWrapper}>
        <div className={style.messageListContainer}>
          <div className={style.messageList}>
            <ul className={style.MessageItemWrapper}>
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
              <MessageItem />
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

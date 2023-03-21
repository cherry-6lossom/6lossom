import style from './MessageList.module.scss';
import { useContext } from 'react';
import MessageItem from '@/components/MessageItem/MessageItem';
import messageContext from '@/contexts/messageContext';

const MessageList = () => {
  const messageVisibility = useContext(messageContext);

  const handleCloseMessageListWithButton = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;
    const backgroundElement =
      e.target.parentElement.parentElement.parentElement;

    if (messageListVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageListVisible(!messageListVisible);
    }
  };

  const handleCloseMessageListWithBackground = (e, messageVisibility) => {
    const { messageListVisible, setMessageListVisible } = messageVisibility;
    const clickedTarget = e.target;
    const backgroundElement = e.currentTarget;

    if (backgroundElement === clickedTarget && messageListVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageListVisible(!messageListVisible);
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

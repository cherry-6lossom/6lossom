import style from './MessageList.module.scss';
import MessageItem from '@/components/MessageItem/MessageItem';

const MessageList = () => {
  return (
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
        <button type="button" className={style.closeButton}></button>
      </div>
    </div>
  );
};

export default MessageList;

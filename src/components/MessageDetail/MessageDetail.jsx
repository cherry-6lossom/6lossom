import style from './MessageDetail.module.scss';

import { useContext } from 'react';
import messageContext from '@/contexts/messageContext';

import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const messageDetail = ({ flowerInfo, messageDetailRef }) => {
  const messageVisibility = useContext(messageContext);

  const { nickname, contents } = flowerInfo;
  const backgroundElement = messageDetailRef.current;

  const handleCloseMessageDetailWithBackground = (e, messageVisibility) => {
    const { messageDetailVisible, setMessageDetailVisible } = messageVisibility;
    const clickedTarget = e.target;

    if (backgroundElement === clickedTarget && messageDetailVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

  const handleClsoeMessageDetailWithButton = (e, messageVisibility) => {
    const { messageDetailVisible, setMessageDetailVisible } = messageVisibility;
    if (messageDetailVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

  return (
    <div
      ref={messageDetailRef}
      onClick={(e) =>
        handleCloseMessageDetailWithBackground(e, messageVisibility)
      }
      className={style.messageDetailBackground}
    >
      <div className={style.messageDetailWrapper}>
        <ul className={style.messageDetailContainer}>
          <li>
            <div className={style.moonIcon}></div>
          </li>
          <li className={style.messageSender}>{nickname}</li>
          <li className={style.messageContents}>{contents}</li>
          <button
            type="button"
            onClick={(e) =>
              handleClsoeMessageDetailWithButton(e, messageVisibility)
            }
            className={style.closeButton}
          >
            OK!
          </button>
        </ul>
      </div>
    </div>
  );
};

export default messageDetail;

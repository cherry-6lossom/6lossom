import style from './MessageDetail.module.scss';

import React, { RefObject, useContext } from 'react';
import messageContext from '@/contexts/messageContext';

import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import {
  FlowerInfoType,
  MessageVisibilityType,
} from '@/pages/ShareTreePage/ShareTreePage';

interface MessageDetailProp {
  flowerInfo: FlowerInfoType;
  messageDetailRef: RefObject<HTMLDivElement>;
}

const messageDetail = ({ flowerInfo, messageDetailRef }: MessageDetailProp) => {
  const messageVisibility = useContext<MessageVisibilityType>(messageContext);

  const { nickname, contents } = flowerInfo;
  const backgroundElement = messageDetailRef.current as HTMLDivElement;
  const { messageDetailVisible, setMessageDetailVisible } = messageVisibility;

  const handleCloseMessageDetailWithBackground = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const clickedTarget = e.target;

    if (backgroundElement === clickedTarget && messageDetailVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

  const handleClsoeMessageDetailWithButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      onClick={(e) => handleCloseMessageDetailWithBackground(e)}
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
            onClick={(e) => handleClsoeMessageDetailWithButton(e)}
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

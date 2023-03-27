import style from './MessageDetail.module.scss';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import { useContext } from 'react';
import messageContext from '@/contexts/messageContext';

const messageDetail = ({ flowerInfo, messageDetailRef }) => {
  const messageVisibility = useContext(messageContext);
  const backgroundElement = messageDetailRef.current;
  const { nickname, contents } = flowerInfo;

  const handleClsoeMessageDetailWithButton = (e, messageVisibility) => {
    const { messageDetailVisible, setMessageDetailVisible } = messageVisibility;
    if (messageDetailVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

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
            <figure className={style.moonIcon}>
              <A11yHidden as={'figcaption'}>
                귀여운 보름달 캐릭터와 함께 흩날리는 벚꽃이 그려진 아이콘입니다.
              </A11yHidden>
            </figure>
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

import style from './MessageDetail.module.scss';
import downloadButton from '@/assets/icon/download.png';
import { useContext } from 'react';
import messageContext from '@/contexts/messageContext';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const messageDetail = () => {
  const messageVisibility = useContext(messageContext);

  const handleClsoeMessageDetailWithButton = (e, messageVisibility) => {
    const { messageDetailVisible, setMessageDetailVisible } = messageVisibility;
    const backgroundElement =
      e.target.parentElement.parentElement.parentElement;
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
    const backgroundElement = e.currentTarget;

    if (backgroundElement === clickedTarget && messageDetailVisible) {
      backgroundElement.style.backgroundColor = '';
      backgroundElement.style.zIndex = '';
      backgroundElement.style.display = '';

      setMessageDetailVisible(!messageDetailVisible);
    }
  };

  return (
    <div
      onClick={(e) =>
        handleCloseMessageDetailWithBackground(e, messageVisibility)
      }
      className={style.messageDetailBackground}
    >
      <div className={style.messageDetailWrapper}>
        <a
          href=""
          className={style.downloadButtonContainer}
          /* 후에 다운로드 기능 추가 download={} */
        >
          <img
            src={downloadButton}
            alt="상세 메세지 다운로드 링크"
            className={style.downloadButton}
          />
        </a>
        <ul className={style.messageDetailContainer}>
          <li>
            <figure className={style.moonIcon}>
              <A11yHidden as={'figcaption'}>
                귀여운 보름달 캐릭터와 함께 흩날리는 벚꽃이 그려진 아이콘입니다.
              </A11yHidden>
            </figure>
          </li>
          <li className={style.messageSender}>발신자</li>
          <li className={style.messageContents}>
            저는 지금까지 많은 사람들을 만나왔지만, 닉네임님과 만난 후로 제
            마음은 항상 설레였습니다. 닉네임님과 함께 있을 때는 시간이 너무 빨리
            흘러가는 것 같아요. 정말로 특별한 사람이라고 생각합니다. 솔직하게
            고백하자면, 저는 닉네임님을 좋아합니다. 닉네임님과 함께 있는 모든
            순간이 행복하고 소중한 추억으로 남을 것 같아요. 물론, 닉네임님도
            같은 마음이신지는 모르겠지만, 제가 이렇게 마음을 열고 고백하는 것은
            닉네임님에게 솔직하게 전하고 싶었기 때문입니다.
          </li>
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

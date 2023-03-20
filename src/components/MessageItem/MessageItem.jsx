import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import style from './MessageItem.module.scss';

const MessageItem = () => {
  return (
    <li className={style.messageItemContainer}>
      <ul className={style.messageItem}>
        <li className={style.messageSender}>
          <figure className={style.messageIcon}>
            <A11yHidden as={'figcaption'}>
              하트가 그려진 편지를 담은 우편지 모양의 아이콘입니다.
            </A11yHidden>
          </figure>
          발신자
        </li>
        <li className={style.messageContentsContainer}>
          <p className={style.messageContents}>
            저는 지금까지 많은 사람들을 만나왔지만, 닉네임님과 만난 후로 제
            마음은 항상 설레였습니다. 닉네임님과 함께 있을 때는 시간이 너무 빨리
            흘러가는 것 같아요. 정말로 특별한 사람이라고 생각합니다. 솔직하게
            고백하자면, 저는 닉네임님을 좋아합니다. 닉네임님과 함께 있는 모든
            순간이 행복하고 소중한 추억으로 남을 것 같아요. 물론, 닉네임님도
            같은 마음이신지는 모르겠지만, 제가 이렇게 마음을 열고 고백하는 것은
            닉네임님에게 솔직하게 전하고 싶었기 때문입니다.
          </p>
        </li>
      </ul>
    </li>
  );
};

export default MessageItem;

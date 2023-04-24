import style from './Flower.module.scss';

import { useContext } from 'react';

import messageContext from '@/contexts/messageContext';

import classNames from 'classnames';

const Flower = ({ uid, id, keyId, item, handleOpenMessageDetail }) => {
  const messageVisibility = useContext(messageContext);

  const { flowerSrc, nickname } = item;
  const localUid = JSON.parse(localStorage.getItem('uid'));

  const handleFlower = () => {
    handleOpenMessageDetail(messageVisibility, item);
  };

  return (
    <li
      className={classNames(
        style.flower,
        id % 7 === 0
          ? style.flower0
          : id % 7 === 1
          ? style.flower1
          : id % 7 === 2
          ? style.flower2
          : id % 7 === 3
          ? style.flower3
          : id % 7 === 4
          ? style.flower4
          : id % 7 === 5
          ? style.flower5
          : style.flower6
      )}
      key={keyId}
    >
      <span>{nickname}</span>
      <button
        className={style.flowerButton}
        onClick={handleFlower}
        aria-label={`${nickname}님의 벚꽃메세지`}
      >
        <img src={`/assets/${flowerSrc}.png`} alt="벚꽃 메세지" />
      </button>
    </li>
  );
};

export default Flower;

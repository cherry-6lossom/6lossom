import style from './Flower.module.scss';
import classNames from 'classnames';
import messageContext from '@/contexts/messageContext';
import { useContext } from 'react';

const Flower = ({ uid, item, handleOpenMessageDetail }) => {
  const messageVisibility = useContext(messageContext);
  const { id, flowerSrc, nickname } = item;
  const localUid = JSON.parse(localStorage.getItem('uid'));

  const handleFlower = () => {
    handleOpenMessageDetail(messageVisibility, item);
  };

  return (
    <div
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
      key={id}
    >
      <button onClick={handleFlower}>
        <img src={flowerSrc} alt="벚꽃 메세지" />
        <span>{nickname}</span>
      </button>
    </div>
  );
};

export default Flower;

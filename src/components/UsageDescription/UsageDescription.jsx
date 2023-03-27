import classNames from 'classnames';
import style from './UsageDescription.module.scss';
import messageIcon from '@/assets/icon/message.png';

const UsageDescription = ({ className = '', subText }) => {
  return (
    <div className={classNames(style.subTitle, className)}>
      {subText.includes('벚꽃나무') ? null : <img src={messageIcon} />}
      <h3>{subText}</h3>
    </div>
  );
};

export default UsageDescription;

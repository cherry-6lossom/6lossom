import classNames from 'classnames';
import style from './UsageDescription.module.scss';

const UsageDescription = ({ className = '', subText }) => {
  return (
    <>
      <h4 className={classNames(`${className}`, style.subTitle)}>{subText}</h4>
    </>
  );
};

export default UsageDescription;

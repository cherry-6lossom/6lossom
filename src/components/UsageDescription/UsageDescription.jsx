import classNames from 'classnames';
import style from './UsageDescription.module.scss';
import makeTreeStyle from '@/pages/MakeTreePage/MakeTreePage.module.scss';

const UsageDescription = ({ makeTreeCustomText = '', subText }) => {
  return (
    <>
      <h4
        className={classNames(
          `${makeTreeStyle.makeTreeCustomText}`,
          style.makeTreeSubTitle
        )}
      >
        {subText}
      </h4>
    </>
  );
};

export default UsageDescription;

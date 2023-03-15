import style from './HeaderTitle.module.scss';

const HeaderTitle = ({ mainText }) => {
  return (
    <>
      <h2 className={style.makeTreeMainTitle}>{mainText}</h2>
    </>
  );
};

export default HeaderTitle;

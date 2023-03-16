import style from './HeaderTitle.module.scss';

const HeaderTitle = ({ userName }) => {
  return (
    <>
      <h2 className={style.makeTreeMainTitle}>
        {userName}
        <span>님의 나무</span>
      </h2>
    </>
  );
};

export default HeaderTitle;

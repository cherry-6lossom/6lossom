import style from './HeaderTitle.module.scss';

const HeaderTitle = ({ userName }) => {
  return (
    <>
      <h2 className={style.headerTitle}>
        {userName}
        <span>님의 벚꽃나무</span>
      </h2>
    </>
  );
};

export default HeaderTitle;

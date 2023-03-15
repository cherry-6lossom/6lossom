import style from './HeaderTitle.module.scss';

const HeaderTitle = () => {
  const { displayName, id } = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user'))
    : '';

  return (
    <>
      <div className={style.headerTitleBorder}>
        {displayName ? displayName + '님의 벚꽃나무' : ''}
      </div>
      <h2 className={style.headerTitle}>
        {displayName ? displayName + '님의 벚꽃나무' : ''}
      </h2>
      <div className={style.userName}>{displayName}</div>
    </>
  );
};

export default HeaderTitle;

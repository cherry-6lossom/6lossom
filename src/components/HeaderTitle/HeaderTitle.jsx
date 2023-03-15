import classes from './HeaderTitle.module.scss';

const HeaderTitle = () => {
  const { displayName, id } = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user'))
    : '';

  return (
    <>
      <div className={classes.headerTitleBorder}>
        {displayName ? displayName + '님의 벚꽃나무' : ''}
      </div>
      <h2 className={classes.headerTitle}>
        {displayName ? displayName + '님의 벚꽃나무' : ''}
      </h2>
      <div className={classes.userName}>{displayName}</div>
    </>
  );
};

export default HeaderTitle;

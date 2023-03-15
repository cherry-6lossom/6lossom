import classes from './HeaderTitle.module.scss';

const HeaderTitle = () => {
  const { displayName, id } = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user'))
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

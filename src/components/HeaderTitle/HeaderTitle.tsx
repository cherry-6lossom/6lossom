import style from './HeaderTitle.module.scss';

import React from 'react';

interface HeaderTitleProp {
  userName: string;
}

const HeaderTitle = ({ userName }: HeaderTitleProp) => {
  return (
    <h2 className={style.headerTitle}>
      {userName}
      <span>님의 벚꽃나무</span>
    </h2>
  );
};

export default HeaderTitle;

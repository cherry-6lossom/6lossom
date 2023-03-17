import { useState } from 'react';
import style from '@/components/SideMenu/sideMenu.module.scss';
import ShortButton from './../ShortButton/ShortButton';

function SideMenu({ loginName }) {
  return (
    <>
      <div className={style.sideMenuBackground}></div>
      <div className={style.sideMenuBar}>
        <div className={style.loginName}>
          {loginName ? `${loginName}님` : '로그인'}
        </div>
        <div className={style.sideMenuNav}>
          <ShortButton text={'About'} className={style.shortButton} />
          <ShortButton text={'Github'} className={style.shortButton} />
        </div>
        <div className={style.contactUs}>Contact Us</div>
        <div className={style.contactEmail}>6candoit@gmail.com</div>
      </div>
    </>
  );
}

export default SideMenu;

import { useState } from 'react';
import classes from '@/components/HamburgerButton/HamburgerButton.module.scss';
import SideMenu from '../SideMenu/SideMenu';

function HamburgerButton() {
  return (
    <>
      <button className={classes.hamburgerButton}>
        <div className={classes.hamburger}>
          <div className={classes.burger1}></div>
          <div className={classes.burger2}></div>
          <div className={classes.burger3}></div>
        </div>
      </button>
    </>
  );
}

export default HamburgerButton;

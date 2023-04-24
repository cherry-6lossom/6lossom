import style from './HamburgerButton.module.scss';

import React from 'react';

import classNames from 'classnames';

interface HamburgerButtonProp {
  isMenuOpen: boolean;
}

function HamburgerButton({ isMenuOpen }: HamburgerButtonProp) {
  return (
    <button
      aria-controls={'hamburder'}
      aria-expanded={isMenuOpen}
      className={classNames('hamburger', style.hamburgerButton)}
      aria-label="메뉴바"
    >
      <div className={style.hamburger}>
        <div className={style.burger1}></div>
        <div className={style.burger2}></div>
        <div className={style.burger3}></div>
      </div>
    </button>
  );
}

export default HamburgerButton;

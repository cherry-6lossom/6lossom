import style from './Header.module.scss';

import React from 'react';

import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';

interface HeaderProp {
  userName: string;
  className?: string;
  subText: string;
}

const Header = ({ userName, className, subText }: HeaderProp) => {
  return (
    <header className={style.header}>
      <HeaderTitle userName={userName} />
      <UsageDescription className={className} subText={subText} />
    </header>
  );
};

export default Header;

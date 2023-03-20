import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import style from './Header.module.scss';

const Header = ({ userName, className, subText }) => {
  return (
    <header className={style.header}>
      <HeaderTitle userName={userName} />
      <UsageDescription className={className} subText={subText} />
    </header>
  );
};

export default Header;

import style from '@/components/SideMenu/sideMenu.module.scss';
import { useNavigate } from 'react-router-dom';
import ShortButton from './../ShortButton/ShortButton';

function SideMenu({ loginName, handleModal }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.sideMenuBackground}></div>
      <div className={style.sideMenuBar}>
        <div className={style.loginName}>
          {loginName ? `${loginName}님` : '로그인'}
        </div>
        <div className={style.sideMenuNav}>
          <ShortButton
            text={'About'}
            onClick={handleModal}
            className={style.shortButton}
          />
          <ShortButton
            onClick={() =>
              (location.href = 'https://github.com/cherry-6lossom/6lossom')
            }
            text={'Github'}
            className={style.shortButton}
          />
        </div>
        <div className={style.contactUs}>Contact Us</div>
        <div className={style.contactEmail}>6candoit@gmail.com</div>
      </div>
    </>
  );
}

export default SideMenu;

import style from '@/components/SideMenu/sideMenu.module.scss';
import { useNavigate } from 'react-router-dom';
import ShortButton from './../ShortButton/ShortButton';
import { useSignOut } from '@/firebase/auth/useSignOut';

function SideMenu({ loginName, handleModal }) {
  const navigate = useNavigate();
  const { signOut } = useSignOut();
  return (
    <div className={style.sideMenuContainer}>
      <div className={style.sideMenuBackground}></div>
      <div className={style.sideMenuBar}>
        <div>
          <div className={style.sideMenuTitle}>
            {loginName ? `${loginName}님` : '로그인'}
          </div>
          <div className={style.sideMenuNav}>
            <ShortButton
              onClick={() => {
                signOut();
                window.location.replace('/');
              }}
              text={'Log Out'}
              className={style.shortButton}
            />
            <ShortButton
              text={'About'}
              onClick={handleModal}
              className={style.shortButton}
            />
          </div>
        </div>
        <div>
          <div className={style.sideMenuTitle}>Period Of Use</div>
          <div className={style.contents}>
            <span className={style.sideMenuSubTitle}>🌸 벚꽃 생성 기간 🌸</span>
            <span>3월 15일 ~ 4월 14일</span>
          </div>
          <div className={style.contents}>
            <span className={style.sideMenuSubTitle}>🌸 벚꽃 열람 기간 🌸</span>
            <span>4월 15일 ~ 4월 29일</span>
          </div>
        </div>
        <div>
          <div className={style.sideMenuTitle}>Contact Us</div>
          <div className={style.sideMenuNav}>
            <ShortButton
              onClick={() =>
                (location.href = 'https://github.com/cherry-6lossom/6lossom')
              }
              text={'Github'}
              className={style.shortButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

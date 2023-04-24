import style from './SideMenu.module.scss';

import React from 'react';

import { useSignOut } from '@/firebase/auth/useSignOut';

import ShortButton from '@/components/ShortButton/ShortButton';

interface SideMenuProp {
  loginName: string;
  handleModal: () => void;
}

function SideMenu({ loginName, handleModal }: SideMenuProp) {
  const { signOut } = useSignOut();

  const handleFocus = () => {
    const hamburgerElement = document.querySelector(
      '.hamburger'
    ) as HTMLElement;

    hamburgerElement.focus();
  };

  return (
    <div id="hamburger" className={style.sideMenuContainer}>
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
          <div className={style.sideMenuTitle}>공지사항</div>
          <div className={style.contents}>
            <span>
              🌸벚꽃메세지는{' '}
              <span className={style.importantText}>4월 15일 00시에 공개</span>
              됩니다.
            </span>
            <span>
              🌸메세지 작성기한은{' '}
              <span className={style.importantText}>4월 14일 23:59 까지 </span>
              입니다. 벚꽃메세지로 마음을 전달해보세요 !
            </span>
            <span>
              🌸벚꽃메세지는{' '}
              <span className={style.importantText}>
                4월 15일~4월 29일까지{' '}
              </span>{' '}
              2주간 열람 가능합니다. 소중한 메세지를 놓치지 않게 기억해주세요 !
            </span>
            <span>
              🌸오류가 발견되면 Contact me에 있는 연락처로 문의 부탁드립니다 !
            </span>
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
      <button onFocus={handleFocus} className={style.focusHamburger}></button>
    </div>
  );
}

export default SideMenu;

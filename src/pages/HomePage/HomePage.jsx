import LoginButton from '@/components/LoginButton/LoginButton';
import OriginTree from '@/components/OriginTree/OriginTree';

import style from './HomePage.module.scss';
import moonLogo from '@/assets/main-page/main-logo.png';
import blossom from '@/assets/custom/cherry-blossom3.png';
import postBox from '@/assets/main-page/click-me-postbox.png';
import classNames from 'classnames';

import { googleProvider } from '@/firebase/app';
import { useReadData } from '@/firebase/firestore/useReadData';
import { useSignOut } from '@/firebase/auth/useSignOut';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { readData, data } = useReadData('users');
  const { signOut } = useSignOut();
  const navigate = useNavigate();

  window.onload = () => {
    signOut();
    localStorage.clear();
  };

  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();
    localStorage.setItem('userList', JSON.stringify(data));
  }, [data]);

  return (
    <div className={style.homeContainer}>
      <div className={style.homeLogo}>
        <img src={moonLogo} alt="" />
        <h1 className={style.homeTitleInfo} aria-label="벚꽃이 지면">
          <span className={style.homeTitleShadow}>벚꽃이 지면</span>
          <span className={style.homeTitleBorder}>벚꽃이 지면</span>
          <span className={style.homeTitle}>벚꽃이 지면</span>
        </h1>
        <h2 className={style.homeSubTitle}>
          벚꽃이 지면 당신의 메세지가 전달됩니다.
        </h2>
      </div>
      <div className={style.tree}>
        <OriginTree className={style.blossomTree} />
        <img
          className={classNames(style.flower1, style.bigFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img
          className={classNames(style.flower2, style.bigFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img
          className={classNames(style.flower3, style.bigFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img
          className={classNames(style.flower4, style.smallFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img
          className={classNames(style.flower5, style.smallFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img
          className={classNames(style.flower6, style.smallFlower)}
          src={blossom}
          alt="벚꽃잎"
        />
        <img className={style.postBox} src={postBox} alt="우체통" />
        <span className={style.clickMeText}>click me!</span>
      </div>
      <div className={style.loginButtonList}>
        <button
          onClick={() => navigate('/signin')}
          className={classNames(style.loginButton, style.generalButton)}
        >
          로그인
        </button>
        <LoginButton
          style={style}
          className={style.googleButton}
          provider={googleProvider}
          text={'구글 계정으로 계속하기'}
        />
      </div>
    </div>
  );
};

export default HomePage;

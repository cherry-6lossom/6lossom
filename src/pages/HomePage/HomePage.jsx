import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import {
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '@/firebase/app';
import { useState } from 'react';
import LoginButton from '@/components/LoginButton/LoginButton';
import style from './HomePage.module.scss';
import moonLogo from '@/assets/main-page/main-logo.png';
import blossomTree from '@/assets/main-page/main-tree.png';
import blossom from '@/assets/custom/cherry-blossom3.png';
import postBox from '@/assets/main-page/click-me-postbox.png';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useReadData } from '@/firebase/firestore/useReadData';

const HomePage = () => {
  const [uid, setUid] = useState('');
  const navigate = useNavigate();

  return (
    <div className={style.homeContainer}>
      {uid ? (
        navigate('/make-tree')
      ) : (
        <>
          <div className={style.homeLogo}>
            <img src={moonLogo} alt="moon-logo" />
            <div className={style.homeTitleInfo}>
              <h2 className={style.homeTitleShadow}>벚꽃이 지면</h2>
              <h2 className={style.homeTitleBorder}>벚꽃이 지면</h2>
              <h2 className={style.homeTitle}>벚꽃이 지면</h2>
            </div>
            <h4 className={style.homeSubTitle}>
              벚꽃이 지면 당신의 메세지가 전달됩니다.
            </h4>
          </div>
          <div className={style.tree}>
            <img
              className={style.blossomTree}
              src={blossomTree}
              alt="벚꽃나무"
            />
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
            <LoginButton
              style={style}
              className={style.googleButton}
              provider={googleProvider}
              text={'구글 계정으로 계속하기'}
              setUid={setUid}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;

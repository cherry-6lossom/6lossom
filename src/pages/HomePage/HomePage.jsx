import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import {
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '@/firebase/app';
import { useState } from 'react';
import LoginButton from '@/components/LoginButton/LoginButton';
import classes from './HomePage.module.scss';
import moonLogo from '@/assets/main-page/main-logo.png';
import blossomTree from '@/assets/main-page/main-tree.png';
import blossom from '@/assets/custom/cherry-blossom3.png';

const HomePage = () => {
  const [uid, setUid] = useState('');

  return (
    <div className={classes.homeContainer}>
      {uid ? (
        <MakeTreePage />
      ) : (
        <>
          <div className={classes.homeLogo}>
            <img src={moonLogo} alt="moon-logo" />
            <div className={classes.homeTitleInfo}>
              <h2 className={classes.homeTitleShadow}>벚꽃이 지면</h2>
              <h2 className={classes.homeTitleBorder}>벚꽃이 지면</h2>
              <h2 className={classes.homeTitle}>벚꽃이 지면</h2>
            </div>
            <h4 className={classes.homeSubTitle}>
              벚꽃이 지면 당신의 메세지가 전달됩니다.
            </h4>
          </div>
          <div className={classes.tree}>
            <img
              className={classes.blossomTree}
              src={blossomTree}
              alt="벚꽃나무"
            />
            <img className={classes.bigFlower} src={blossom} alt="벚꽃잎" />
            <img className={classes.smallFlower} src={blossom} alt="벚꽃잎" />
          </div>
          <LoginButton
            provider={googleProvider}
            text={'google'}
            setUid={setUid}
          />
          <LoginButton
            provider={facebookProvider}
            text={'facebook'}
            setUid={setUid}
          />
          <LoginButton
            provider={twitterProvider}
            text={'twitter'}
            setUid={setUid}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;

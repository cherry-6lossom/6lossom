import style from './HomePage.module.scss';
import classNames from 'classnames';
import blossom from '@/assets/custom/cherry-blossom3.png';
import blossomTree from '@/assets/main-page/main-tree.png';

import LoginButton from '@/components/LoginButton/LoginButton';
import ModalProjectInfo from '@/components/ModalProjectInfo/ModalProjectInfo';
import ProjectInfoButton from '@/components/ProjectInfoButton/ProjectInfoButton';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

import { googleProvider } from '@/firebase/app';
import { useSignOut } from '@/firebase/auth/useSignOut';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  const { signOut } = useSignOut();

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const navigate = useNavigate();

  window.onload = () => {
    signOut();
    localStorage.clear();
  };

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.homeLogo}>
          <div className={style.homeMainTitle}>
            <figure className={style.moonLogo}>
              <A11yHidden as={'figcaption'}>
                초승달과 벚꽃이 함께있는 모양의 아이콘입니다.
              </A11yHidden>
            </figure>
            <h1 className={style.homeTitleInfo} aria-label="벚꽃이 지면">
              <span className={style.homeTitleShadow}>벚꽃이 지면</span>
              <span className={style.homeTitleBorder}>벚꽃이 지면</span>
              <span className={style.homeTitle}>벚꽃이 지면</span>
            </h1>
          </div>
          <h2 className={style.homeSubTitle}>
            벚꽃이 지면 당신의 메세지가 전달됩니다.
          </h2>
        </div>
        <div className={style.tree}>
          <figure className={style.blossomTree}>
            <A11yHidden as={'figcaption'}>
              벚꽃이지면 프로젝트의 메인 벚꽃나무 이미지입니다.
            </A11yHidden>
          </figure>
          <ProjectInfoButton handleModal={handleModal} />
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
      {modal ? <ModalProjectInfo handleModal={handleModal} /> : null}
    </>
  );
};

export default HomePage;

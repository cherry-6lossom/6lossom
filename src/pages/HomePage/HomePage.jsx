import style from './HomePage.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebase/app';
import { useSignOut } from '@/firebase/auth/useSignOut';
import { useReadData } from '@/firebase/firestore/useReadData';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import LoginButton from '@/components/LoginButton/LoginButton';
import ModalProjectInfo from '@/components/ModalProjectInfo/ModalProjectInfo';
import ProjectInfoButton from '@/components/ProjectInfoButton/ProjectInfoButton';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const HomePage = () => {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const { signOut } = useSignOut();
  const { createAuthUser, isLoading, error } = useCreateAuthUser('users');
  const { readData, data } = useReadData('users');

  const handleModal = () => {
    setModal(!modal);
  };

  window.onload = () => {
    signOut();
    localStorage.clear();
  };

  const handleLoginClick = async () => {
    const { user } = await signInWithPopup(auth, googleProvider);
    const { uid } = user;

    localStorage.setItem('uid', JSON.stringify(uid));

    await createAuthUser(user);
    await readData(uid);

    navigate('/make-tree');
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
            <h1 className={style.homeTitleInfo}>
              <span aria-hidden className={style.homeTitleShadow}>
                벚꽃이 지면
              </span>
              <span aria-hidden className={style.homeTitleBorder}>
                벚꽃이 지면
              </span>
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
          <LoginButton
            className={style.generalButton}
            onClick={() => navigate('/signin')}
            text="로그인"
          />
          <LoginButton
            className={style.googleButton}
            provider={googleProvider}
            onClick={handleLoginClick}
            text={'구글 계정으로 계속하기'}
          />
        </div>
      </div>
      {modal ? <ModalProjectInfo handleModal={handleModal} /> : null}
    </>
  );
};

export default HomePage;

import style from './HomePage.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebase/app';
import { useSignOut } from '@/firebase/auth/useSignOut';
import { useReadData } from '@/firebase/firestore/useReadData';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import LoginButton from '@/components/LoginButton/LoginButton';
import ModalProjectInfo from '@/components/ModalProjectInfo/ModalProjectInfo';
import ProjectInfoButton from '@/components/ProjectInfoButton/ProjectInfoButton';

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
            <div className={style.moonLogo}></div>
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
          <p className={style.homeSubTitle}>
            벚꽃이 지면 당신의 메세지가 전달됩니다.
          </p>
        </div>
        <div className={style.tree}>
          <div className={style.blossomTree}></div>
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
          <p className={style.toSignUpPageWithDescription}>
            가입한 계정이 없다면{' '}
            <button
              type="button"
              className={style.toSignUpPageLink}
              onClick={() => navigate('/signup')}
            >
              회원가입
            </button>
            을 해주세요 !
          </p>
        </div>
      </div>
      {modal ? <ModalProjectInfo handleModal={handleModal} /> : null}
    </>
  );
};

export default HomePage;

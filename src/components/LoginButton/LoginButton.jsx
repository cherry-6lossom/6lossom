import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';
import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/app';
import classNames from 'classnames';
import { useReadData } from '@/firebase/firestore/useReadData';

const LoginButton = ({ provider, text, setUid, className, style }) => {
  const { createAuthUser, isLoading, error } = useCreateAuthUser('users');
  const { readData, data } = useReadData('users');

  const handleLoginClick = () => {
    signInWithPopup(auth, provider)
      .then(async (authInfo) => {
        setUid(authInfo.user.uid);
        localStorage.setItem('uid', JSON.stringify(authInfo.user.uid));
        localStorage.setItem('user', JSON.stringify(authInfo.user.displayName));
        createAuthUser(authInfo.user);
        return authInfo.user;
      })
      .then(async (authUser) => {
        await readData(authUser.uid);
        console.log(await data);
        localStorage.setItem('isMade', await JSON.stringify(data.isMade));
      });
  };

  useEffect(() => {
    setUid(localStorage.getItem('uid'));
  });

  return (
    <>
      <button
        className={classNames(style.loginButton, className)}
        onClick={handleLoginClick}
      >
        {text}
      </button>
    </>
  );
};

export default LoginButton;

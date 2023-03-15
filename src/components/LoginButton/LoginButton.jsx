import { useCreateAuthUser } from '@/firebase/auth/useCreateAuthUser';
import { useReadData } from '@/firebase/firestore/useReadData';
import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/app';
import classNames from 'classnames';

const LoginButton = ({ provider, text, setUid, className, style }) => {
  const { createAuthUser, isLoading, error } = useCreateAuthUser('authUsers');

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUid(data.user.uid);
      localStorage.setItem('uid', data.user.uid);
      localStorage.setItem('user', JSON.stringify(data.user.displayName));
      createAuthUser(data.user);
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

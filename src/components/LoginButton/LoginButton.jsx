import { useCreateAuthUser } from '@/firebase/auth/useCreateAuthUser';
import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '@/firebase/app';
import classNames from 'classnames';

const LoginButton = ({ provider, text, setUid, className, style }) => {
  const { createAuthUser, isLoading, error } = useCreateAuthUser('authUsers');

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUid(data.user.email);
      sessionStorage.setItem('uid', data.user.uid);
      createAuthUser(data.user);
    });
  };

  useEffect(() => {
    setUid(sessionStorage.getItem('uid'));
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

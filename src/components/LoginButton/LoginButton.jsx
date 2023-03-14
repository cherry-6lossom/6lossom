import { useCreateAuthUser } from '@/firebase/useCreateAuthUser';
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/app';

const LoginButton = ({ provider, text, setUid }) => {
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
      <button onClick={handleLoginClick}>Sigin with {text}</button>
    </>
  );
};

export default LoginButton;

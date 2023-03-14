import React, { useEffect, useState } from 'react';
import { useReadData } from '../../firebase/firestore/useReadData';
import { db } from '@/firebase/app';

const MakeTreePage = () => {
  const { readData, data, isLoading, error } = useReadData('authUsers');
  const uid = sessionStorage.getItem('uid');

  useEffect(() => {
    readData(uid);
  }, []);
  sessionStorage.setItem('user', JSON.stringify(data));

  const { displayName, id } = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user'))
    : '';

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>MakeTree Page</h1>
      <button onClick={logout}>Logout</button>
      <h2>{displayName ? displayName + '님의 벚꽃나무' : ''}</h2>
    </div>
  );
};

export default MakeTreePage;

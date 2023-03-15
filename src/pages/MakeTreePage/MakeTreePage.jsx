import React, { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore/useReadData';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';

const MakeTreePage = () => {
  const { readData, data, isLoading, error } = useReadData('authUsers');
  const uid = sessionStorage.getItem('uid');

  useEffect(() => {
    readData(uid);
  }, []);
  sessionStorage.setItem('user', JSON.stringify(data));

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <HeaderTitle />
    </div>
  );
};

export default MakeTreePage;

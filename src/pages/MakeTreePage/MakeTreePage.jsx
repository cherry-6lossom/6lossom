import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore/useReadData';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';

const MakeTreePage = () => {
  const { readData, data, isLoading, error } = useReadData('authUsers');
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    readData(uid);
  }, []);
  localStorage.setItem('user', JSON.stringify(data));

  const logout = () => {
    localStorage.clear();
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

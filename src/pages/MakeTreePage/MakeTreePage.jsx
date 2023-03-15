import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore/useReadData';

const MakeTreePage = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const displayName = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>MakeTree Page</h1>
      <button onClick={logout}>Logout</button>
      <h2>{displayName ? displayName + '님의 벚꽃나무' : ''}</h2>
    </div>
  );
};

export default MakeTreePage;

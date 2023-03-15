import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReadData } from '@/firebase/firestore/useReadData';

const MakeTreePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
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

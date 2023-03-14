import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from '@/firebase/app';
import { useState } from 'react';
import LoginButton from '@/components/LoginButton/LoginButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = () => {
  const [uid, setUid] = useState('');

  return (
    <div>
      {uid ? (
        <MakeTreePage />
      ) : (
        <>
          <LoginButton
            provider={googleProvider}
            text={'google'}
            setUid={setUid}
          />
          <LoginButton
            provider={facebookProvider}
            text={'facebook'}
            setUid={setUid}
          />
          <LoginButton
            provider={twitterProvider}
            text={'twitter'}
            setUid={setUid}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;

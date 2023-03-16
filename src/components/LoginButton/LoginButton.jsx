import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase/app';
import classNames from 'classnames';
import { useReadData } from '@/firebase/firestore/useReadData';
import { useNavigate } from 'react-router-dom';

const LoginButton = ({ provider, text, className, style }) => {
  const { createAuthUser, isLoading, error } = useCreateAuthUser('users');
  const { readData, data } = useReadData('users');
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const { uid, displayName } = user;

    localStorage.setItem('uid', JSON.stringify(uid));
    localStorage.setItem('user', JSON.stringify(displayName));

    await createAuthUser(user);
    await readData(uid);

    navigate('/make-tree');
  };

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
